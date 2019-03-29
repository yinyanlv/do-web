import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {TranslateService} from '@ngx-translate/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JConfigService} from 'src/ngx-joy/services/config.service';
import {JNavService} from 'src/ngx-joy/components/nav/nav.service';
import {JSidebarService} from 'src/ngx-joy/components/sidebar/sidebar.service';
import {JSplashScreenService} from 'src/ngx-joy/services/splash-screen.service';
import {JTranslationLoaderService} from 'src/ngx-joy/services/translation-loader.service';

import {fakeNavItems} from 'src/fake-db/nav';
import {locale as localeZh} from './i18n/zh';
import {locale as localeEn} from './i18n/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  jConfig: any;
  nav: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _jConfigService: JConfigService,
    private _jNavService: JNavService,
    private _jSidebarService: JSidebarService,
    private _jSplashScreenService: JSplashScreenService,
    private _jTranslationLoaderService: JTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {
    this.nav = fakeNavItems;

    this._jNavService.register('main', this.nav);

    this._jNavService.setCurrentNav('main');

    this._translateService.addLangs(['zh', 'en']);

    this._translateService.setDefaultLang('en');

    this._jTranslationLoaderService.loadTranslations(localeZh, localeEn);

    this._translateService.use('en');

    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.jConfig = config;

        if (this.jConfig.layout.width === 'boxed') {
          this.document.body.classList.add('boxed');
        } else {
          this.document.body.classList.remove('boxed');
        }

        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.jConfig.colorTheme);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleSidebarOpen(key): void {
    this._jSidebarService.getSidebar(key).toggleOpen();
  }
}
