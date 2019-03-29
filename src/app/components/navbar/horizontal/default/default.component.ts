import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {JConfigService} from 'src/ngx-joy/services/config.service';
import {JNavService} from 'src/ngx-joy/components/nav/nav.service';
import {JSidebarService} from 'src/ngx-joy/components/sidebar/sidebar.service';

@Component({
  selector: 'navbar-horizontal-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarHorizontalDefaultComponent implements OnInit, OnDestroy {
  jConfig: any;
  nav: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService,
    private _jNavService: JNavService,
    private _jSidebarService: JSidebarService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jNavService.onNavChanged
      .pipe(
        filter(value => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this.nav = this._jNavService.getCurrentNav();
      });

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
