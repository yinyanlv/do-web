import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {delay, filter, take, takeUntil} from 'rxjs/operators';

import {JConfigService} from 'src/ngx-joy/services/config.service';
import {JNavService} from 'src/ngx-joy/components/nav/nav.service';
import {JSidebarService} from 'src/ngx-joy/components/sidebar/sidebar.service';
import {JPerfectScrollbarDirective} from 'src/ngx-joy/directives/perfect-scrollbar.directive';

@Component({
  selector: 'navbar-vertical-pure',
  templateUrl: './pure.component.html',
  styleUrls: ['./pure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalPureComponent implements OnInit, OnDestroy {
  jConfig: any;
  nav: any;

  private _jPerfectScrollbar: JPerfectScrollbarDirective;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService,
    private _jNavService: JNavService,
    private _jSidebarService: JSidebarService,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  @ViewChild(JPerfectScrollbarDirective)
  set directive(theDirective: JPerfectScrollbarDirective) {
    if (!theDirective) {
      return;
    }

    this._jPerfectScrollbar = theDirective;

    this._jNavService.onItemCollapseToggled
      .pipe(
        delay(500),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this._jPerfectScrollbar.update();
      });

    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
          setTimeout(() => {
            const activeNavItem: any = document.querySelector('navbar .nav-link.active');

            if (activeNavItem) {
              const activeItemOffsetTop = activeNavItem.offsetTop,
                activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                scrollDistance = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3);

              this._jPerfectScrollbar.scrollToTop(scrollDistance);
            }
          });
        }
      );
  }

  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
          if (this._jSidebarService.getSidebar('navbar')) {
            this._jSidebarService.getSidebar('navbar').close();
          }
        }
      );

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

  toggleSidebarOpened(): void {
    this._jSidebarService.getSidebar('navbar').toggleOpen();
  }

  toggleSidebarFolded(): void {
    this._jSidebarService.getSidebar('navbar').toggleFold();
  }
}
