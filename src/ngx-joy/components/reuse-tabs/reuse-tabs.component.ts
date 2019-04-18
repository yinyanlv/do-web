import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {JRouteReuseStrategy} from './route-reuse-strategy';
import {JNavItem} from '../nav/nav.component';
import {JNavService} from '../nav/nav.service';
import {JReuseTabsContextMenuService} from './context-menu/context-menu.service';

export interface Tab {
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
  tabs: Tab[] = [];
  activeIndex: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _jNavService: JNavService
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
  }

  getTabData(url: string): Tab {
    let data: any = {};

    this.nav.forEach((item: any) => {
      if (item.url === url) {
        data = item;
        return;
      }
    });
    return data as Tab;
  }

  closeTab(tab: Tab): void {
    const activeIndex = this.tabs.indexOf(tab);
    const nextActiveIndex = activeIndex === 0 ? activeIndex + 1 : activeIndex - 1;
    const nextActiveTab = this.tabs[nextActiveIndex];

    this.tabs.splice(activeIndex, 1);

    this.activeIndex = this.tabs.findIndex((item) => {
      return item === nextActiveTab;
    });

    this._router.navigate([nextActiveTab.url]);

    setTimeout(() => {
      delete JRouteReuseStrategy.handles[tab.url.replace(/\//g, '_')];
    });
  }

  activateTab(index: number) {
    this._router.navigate([this.tabs[index].url]);
  }
}
