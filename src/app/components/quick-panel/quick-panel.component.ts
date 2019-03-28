import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'quick-panel',
  templateUrl: './quick-panel.component.html',
  styleUrls: ['./quick-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent implements OnInit, OnDestroy {
  date: Date;
  events: any[];
  notes: any[];
  settings: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.date = new Date();
    this.settings = {
      notify: true,
      cloud: false,
      retro: true
    };

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._httpClient.get('api/quick-panel-events')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((response: any) => {
        this.events = response;
      });

    this._httpClient.get('api/quick-panel-notes')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((response: any) => {
        this.notes = response;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
