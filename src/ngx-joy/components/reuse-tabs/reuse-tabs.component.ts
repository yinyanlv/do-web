import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {JRouteReuseStrategy} from './route-reuse-strategy';
import {navItems} from '../../../app/data/nav';
import {JNavItem} from '../nav/nav.component';

export interface Tab {
  id?: string;
  title: string;
  url: string;
}

@Component({
  selector: 'j-reuse-tabs',
  templateUrl: './reuse-tabs.component.html',
  styleUrls: ['./reuse-tabs.component.scss']
})
export class JReuseTabsComponent implements OnInit {

  nav: JNavItem[] = navItems;
  tabs: Tab[] = [];
  activeIndex: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    const snapshot = this._activatedRoute.snapshot as any;
    const url = snapshot._routerState.url;

    this.tabs.push(this.getTabData(url));

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
          this.tabs.push(this.getTabData(url));
          this.activeIndex++;
        }
      });
  }

  getTabData(url: string): Tab {
    let data: any = {};

    this.nav.forEach((subNav: any) => {

      subNav.children.forEach((item: JNavItem) => {
        if (item.url === url) {
          data = item;
        }
      });
    });

    return data as Tab;
  }

  closeTab(tab: Tab): void {

    if (this.tabs.length <= 1) {
      return;
    }

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
