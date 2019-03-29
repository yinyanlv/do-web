import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {JConfigService} from '../../../../ngx-joy/services/config.service';
import {fakeNavItems} from '../../../../fake-db/nav';

@Component({
  selector: 'vertical-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayoutDefaultComponent implements OnInit, OnDestroy {
  jConfig: any;
  nav: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService
  ) {
    this.nav = fakeNavItems;

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
