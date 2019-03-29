import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {CookieService} from 'ngx-cookie-service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JMatchMediaService} from '../../services/match-media.service';
import {JNavService} from '../../components/nav/nav.service';

@Component({
  selector: 'j-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class JShortcutsComponent implements OnInit, OnDestroy {
  shortcutItems: any[];
  navItems: any[];
  filteredNavItems: any[];
  searching: boolean;
  mobileShortcutsPanelActive: boolean;

  @Input()
  nav: any;

  @ViewChild('searchInput')
  searchInputField;

  @ViewChild('shortcuts')
  shortcutsEl: ElementRef;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _cookieService: CookieService,
    private _jMatchMediaService: JMatchMediaService,
    private _jNavService: JNavService,
    private _mediaObserver: MediaObserver,
    private _renderer: Renderer2
  ) {
    this.shortcutItems = [];
    this.searching = false;
    this.mobileShortcutsPanelActive = false;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.filteredNavItems = this.navItems = this._jNavService.getFlatNav(this.nav);

    if (this._cookieService.check('J.shortcuts')) {
      this.shortcutItems = JSON.parse(this._cookieService.get('J.shortcuts'));
    } else {
      this.shortcutItems = [
        {
          'title': 'Calendar',
          'type': 'item',
          'icon': 'today',
          'url': '/apps/calendar'
        },
        {
          'title': 'Mail',
          'type': 'item',
          'icon': 'email',
          'url': '/apps/mail'
        },
        {
          'title': 'Contacts',
          'type': 'item',
          'icon': 'account_box',
          'url': '/apps/contacts'
        },
        {
          'title': 'To-Do',
          'type': 'item',
          'icon': 'check_box',
          'url': '/apps/todo'
        }
      ];
    }

    this._jMatchMediaService.onMediaChange
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        if (this._mediaObserver.isActive('gt-sm')) {
          this.hideMobileShortcutsPanel();
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  search(event): void {
    const value = event.target.value.toLowerCase();

    if (value === '') {
      this.searching = false;
      this.filteredNavItems = this.navItems;

      return;
    }

    this.searching = true;

    this.filteredNavItems = this.navItems.filter((navItem) => {
      return navItem.title.toLowerCase().includes(value);
    });
  }

  toggleShortcut(event, itemToToggle): void {
    event.stopPropagation();

    for (let i = 0; i < this.shortcutItems.length; i++) {
      if (this.shortcutItems[i].url === itemToToggle.url) {
        this.shortcutItems.splice(i, 1);

        this._cookieService.set('J.shortcuts', JSON.stringify(this.shortcutItems));

        return;
      }
    }

    this.shortcutItems.push(itemToToggle);

    this._cookieService.set('J.shortcuts', JSON.stringify(this.shortcutItems));
  }

  isInShortcuts(navItem): any {
    return this.shortcutItems.find(item => {
      return item.url === navItem.url;
    });
  }

  onMenuOpen(): void {
    setTimeout(() => {
      this.searchInputField.nativeElement.focus();
    });
  }

  showMobileShortcutsPanel(): void {
    this.mobileShortcutsPanelActive = true;
    this._renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
  }

  hideMobileShortcutsPanel(): void {
    this.mobileShortcutsPanelActive = false;
    this._renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
  }
}
