import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {JConfigService} from 'src/ngx-joy/services/config.service';

@Component({
  selector: 'vertical-layout-gap',
  templateUrl: './gap.component.html',
  styleUrls: ['./gap.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayoutGapComponent implements OnInit, OnDestroy {
  jConfig: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.jConfig = config;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
