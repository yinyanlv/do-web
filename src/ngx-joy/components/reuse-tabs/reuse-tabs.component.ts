import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, DetachedRouteHandle} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {JRouteReuseStrategy} from './route-reuse-strategy';
import {JNavItem} from '../nav/nav.component';
import {JNavService} from '../nav/nav.service';
import {JReuseTabsContextMenuService} from './context-menu/context-menu.service';
import {JContextMenuAction} from './context-menu/context-menu.component';

export interface JTab {
  id?: string;
  title: string;
  url: string;
}

@Component({
  selector: 'j-reuse-tabs',
  templateUrl: './reuse-tabs.component.html',
  styleUrls: ['./reuse-tabs.component.scss'],
  providers: [
    JReuseTabsContextMenuService
  ]
})
export class JReuseTabsComponent implements OnInit {

  nav: JNavItem[];
  tabs: JTab[] = [];
  activeIndex: number = 0;

  @Input('defaultUrl')
  _defaultUrl: string = '/';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _jNavService: JNavService,
    private _jContextMenuService: JReuseTabsContextMenuService
  ) {
  }

  ngOnInit() {
    this.nav = this._jNavService.getFlatNav(this._jNavService.getCurrentNav());

    this._router.events
      .pipe(filter((event) => {
        return event instanceof NavigationEnd;
      }))
      .pipe(map(() => this._activatedRoute))
      .pipe(map((route) => {
        const snapshot = route.snapshot as any;
        return snapshot._routerState.url;
      }))
      .subscribe((url: string) => {
        const index = this.tabs.findIndex((item) => {
          return item.url === url;
        });

        if (index !== -1) {
          this.activeIndex = index;
        } else {
          if (url !== '/') {
            this.tabs.push(this.getTabData(url));
            this.activeIndex++;
          }
        }
      });

    this._jContextMenuService.onContextMenuChange.subscribe((data) => {
      this.handleContextMenuAction(data);
    });
  }

  getTabData(url: string): JTab {
    let data: any = {};

    this.nav.forEach((item: any) => {
      if (item.url === url) {
        data = item;
        return;
      }
    });
    return data as JTab;
  }

  closeTab(tab: JTab): void {
    const activeIndex = this.tabs.indexOf(tab);
    const nextActiveIndex = activeIndex === 0 ? activeIndex + 1 : activeIndex - 1;
    const nextActiveTab = this.tabs[nextActiveIndex];

    this.tabs.splice(activeIndex, 1);

    this.activeIndex = this.tabs.findIndex((item) => {
      return item === nextActiveTab;
    });

    if (nextActiveTab) {
      this._router.navigate([nextActiveTab.url]);
    } else {
      this._router.navigate([this._defaultUrl]);
    }

    setTimeout(() => {
      delete JRouteReuseStrategy.handles[tab.url.replace(/\//g, '_')];
    });
  }

  activateTab(index: number) {
    if (this.tabs[index]) {
      this._router.navigate([this.tabs[index].url]);
    }
  }

  handleContextMenuAction(data: any) {

    if (!data.action) {
      return;
    }

    switch (data.action) {
      case 'close-current':
        this._closeCurrent(data.payload);
        break;
      case 'close-other':
        this._closeOther(data.payload);
        break;
      case 'close-all':
        this._closeAll();
        break;
    }
  }

  private _closeCurrent(tab: JTab) {

    this.closeTab(tab);
  }

  private _closeOther(tab: JTab) {
    const key = tab.url.replace(/\//g, '_');
    const routeHandle: DetachedRouteHandle = JRouteReuseStrategy.handles[key];
    this.tabs = [tab];
    this.activeIndex = 0;

    setTimeout(() => {
      JRouteReuseStrategy.handles = {};
      JRouteReuseStrategy.handles[key] = routeHandle;
    });
  }

  private _closeAll() {

    this.tabs = [];
    this.activeIndex = 0;
    JRouteReuseStrategy.handles = {};
    this._router.navigate([this._defaultUrl]);
  }
}
