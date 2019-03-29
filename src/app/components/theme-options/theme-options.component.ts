import {Component, HostBinding, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JConfigService} from 'src/ngx-joy/services/config.service';
import {JNavService} from 'src/ngx-joy/components/nav/nav.service';
import {JSidebarService} from 'src/ngx-joy/components/sidebar/sidebar.service';

@Component({
  selector: 'theme-options',
  templateUrl: './theme-options.component.html',
  styleUrls: ['./theme-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeOptionsComponent implements OnInit, OnDestroy {
  jConfig: any;
  form: FormGroup;

  @HostBinding('class.bar-closed')
  barClosed: boolean;

  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _formBuilder: FormBuilder,
    private _jConfigService: JConfigService,
    private _jNavService: JNavService,
    private _jSidebarService: JSidebarService,
    private _renderer: Renderer2
  ) {
    this.barClosed = true;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      colorTheme: new FormControl(),
      customScrollbars: new FormControl(),
      layout: this._formBuilder.group({
        style: new FormControl(),
        width: new FormControl(),
        navbar: this._formBuilder.group({
          primaryBackground: new FormControl(),
          secondaryBackground: new FormControl(),
          folded: new FormControl(),
          hidden: new FormControl(),
          position: new FormControl(),
          variant: new FormControl()
        }),
        toolbar: this._formBuilder.group({
          background: new FormControl(),
          customBackgroundColor: new FormControl(),
          hidden: new FormControl(),
          position: new FormControl()
        }),
        footer: this._formBuilder.group({
          background: new FormControl(),
          customBackgroundColor: new FormControl(),
          hidden: new FormControl(),
          position: new FormControl()
        }),
        sidepanel: this._formBuilder.group({
          hidden: new FormControl(),
          position: new FormControl()
        })
      })
    });

    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.jConfig = config;

        this.form.setValue(config, {emitEvent: false});
      });

    this.form.get('layout.style').valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {

        this._resetFormValues(value);
      });

    this.form.valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this._jConfigService.config = config;
      });

    const customFunctionNavItem = {
      id: 'custom-function',
      title: 'Custom Function',
      type: 'group',
      icon: 'settings',
      children: [
        {
          id: 'customize',
          title: 'Customize',
          type: 'item',
          icon: 'settings',
          function: () => {
            this.toggleSidebarOpen('themeOptionsPanel');
          }
        }
      ]
    };

    this._jNavService.addNavItem(customFunctionNavItem, 'end');
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();

    this._jNavService.removeNavItem('custom-function');
  }

  private _resetFormValues(value): void {
    switch (value) {
      case 'vertical-layout-default': {
        this.form.patchValue({
          layout: {
            width: 'fullwidth',
            navbar: {
              primaryBackground: 'j-navy-700',
              secondaryBackground: 'j-navy-900',
              folded: false,
              hidden: false,
              position: 'left',
              variant: 'vertical-default'
            },
            toolbar: {
              background: 'j-white-500',
              customBackgroundColor: false,
              hidden: false,
              position: 'below-static'
            },
            footer: {
              background: 'j-navy-900',
              customBackgroundColor: true,
              hidden: false,
              position: 'below-static'
            },
            sidepanel: {
              hidden: false,
              position: 'right'
            }
          }
        });

        break;
      }

      case 'vertical-layout-nav-unsplit': {
        this.form.patchValue({
          layout: {
            width: 'fullwidth',
            navbar: {
              primaryBackground: 'j-navy-700',
              secondaryBackground: 'j-navy-900',
              folded: false,
              hidden: false,
              position: 'left',
              variant: 'vertical-default'
            },
            toolbar: {
              background: 'j-white-500',
              customBackgroundColor: false,
              hidden: false,
              position: 'below'
            },
            footer: {
              background: 'j-navy-900',
              customBackgroundColor: true,
              hidden: false,
              position: 'below'
            },
            sidepanel: {
              hidden: false,
              position: 'right'
            }
          }
        });

        break;
      }

      case 'vertical-layout-gap': {
        this.form.patchValue({
          layout: {
            width: 'fullwidth',
            navbar: {
              primaryBackground: 'j-navy-700',
              secondaryBackground: 'j-navy-900',
              folded: false,
              hidden: false,
              position: 'left',
              layout: 'vertical-default'
            },
            toolbar: {
              background: 'j-white-500',
              customBackgroundColor: false,
              hidden: false,
              position: 'above-static'
            },
            footer: {
              background: 'j-navy-900',
              customBackgroundColor: true,
              hidden: false,
              position: 'above-static'
            },
            sidepanel: {
              hidden: false,
              position: 'right'
            }
          }
        });

        break;
      }

      case 'horizontal-layout-default': {
        this.form.patchValue({
          layout: {
            width: 'fullwidth',
            navbar: {
              primaryBackground: 'j-navy-700',
              secondaryBackground: 'j-navy-900',
              folded: false,
              hidden: false,
              position: 'top',
              variant: 'vertical-default'
            },
            toolbar: {
              background: 'j-white-500',
              customBackgroundColor: false,
              hidden: false,
              position: 'above'
            },
            footer: {
              background: 'j-navy-900',
              customBackgroundColor: true,
              hidden: false,
              position: 'above-fixed'
            },
            sidepanel: {
              hidden: false,
              position: 'right'
            }
          }
        });

        break;
      }
    }
  }

  toggleSidebarOpen(key): void {
    this._jSidebarService.getSidebar(key).toggleOpen();
  }
}
