import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JConfigService} from '../../services/config.service';

@Component({
  selector: 'j-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class JSearchBarComponent implements OnInit, OnDestroy {
  collapsed: boolean;
  fuseConfig: any;

  @Output()
  input: EventEmitter<any>;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService
  ) {
    this.input = new EventEmitter();
    this.collapsed = true;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (config) => {
          this.fuseConfig = config;
        }
      );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  collapse(): void {
    this.collapsed = true;
  }

  expand(): void {
    this.collapsed = false;
  }

  search(event): void {
    this.input.emit(event.target.value);
  }
}
