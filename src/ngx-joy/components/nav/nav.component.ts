import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {merge, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {JNavService} from './nav.service';

@Component({
  selector: 'j-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JNavComponent implements OnInit {
  /**
   * @type {string}
   * 'vertical' | 'horizontal'
   */
  @Input()
  layout = 'vertical';

  @Input()
  nav: JNavItem[];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _jNavService: JNavService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.nav = this.nav || this._jNavService.getCurrentNav();

    this._jNavService.onNavChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {

        this.nav = this._jNavService.getCurrentNav();

        this._changeDetectorRef.markForCheck();
      });

    merge(
      this._jNavService.onNavItemAdded,
      this._jNavService.onNavItemUpdated,
      this._jNavService.onNavItemRemoved
    ).pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
  }

  isVerticalLayout(): boolean {
    return this.layout === 'vertical';
  }
}

export interface JNavItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapsible';
  icon?: string;
  translate?: string;
  hidden?: boolean;
  url?: string;
  externalUrl?: string;
  exactMatch?: boolean;
  classes?: string;
  openInNewTab?: boolean;
  function?: (e: Event, item: any) => any;
  badge?: {
    title?: string;
    translate?: string;
    fg?: string;
    bg?: string;
  };
  children?: JNavItem[];
}
