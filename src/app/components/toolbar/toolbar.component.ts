import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import * as _ from 'lodash';
import {JConfigService} from 'src/ngx-joy/services/config.service';
import {JSidebarService} from 'src/ngx-joy/components/sidebar/sidebar.service';
import {navItems} from '../../data/nav';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
  horizontalNavbar: boolean;
  rightNavbar: boolean;
  hiddenNavbar: boolean;
  languages: any;
  nav: any;
  selectedLanguage: any;
  userStatusOptions: any[];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService,
    private _jSidebarService: JSidebarService,
    private _translateService: TranslateService
  ) {
    this.userStatusOptions = [
      {
        'title': 'Online',
        'icon': 'icon-checkbox-marked-circle',
        'color': '#4CAF50'
      },
      {
        'title': 'Away',
        'icon': 'icon-clock',
        'color': '#FFC107'
      },
      {
        'title': 'Do not Disturb',
        'icon': 'icon-minus-circle',
        'color': '#F44336'
      },
      {
        'title': 'Invisible',
        'icon': 'icon-checkbox-blank-circle-outline',
        'color': '#BDBDBD'
      },
      {
        'title': 'Offline',
        'icon': 'icon-checkbox-blank-circle-outline',
        'color': '#616161'
      }
    ];

    this.languages = [
      {
        id: 'zh',
        title: '中文',
        flag: 'cn'
      },
      {
        id: 'en',
        title: 'English',
        flag: 'us'
      }
    ];

    this.nav = navItems;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((settings) => {
        this.horizontalNavbar = settings.layout.navbar.position === 'top';
        this.rightNavbar = settings.layout.navbar.position === 'right';
        this.hiddenNavbar = settings.layout.navbar.hidden === true;
      });

    this.selectedLanguage = _.find(this.languages, {'id': this._translateService.currentLang});
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleSidebarOpen(key): void {
    this._jSidebarService.getSidebar(key).toggleOpen();
  }

  search(value): void {
    // TODO
    console.log(value);
  }

  setLanguage(lang): void {
    this.selectedLanguage = lang;

    this._translateService.use(lang.id);
  }
}
