import {ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {merge, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JNavItem} from '../../nav.component';
import {JNavService} from '../../nav.service';

@Component({
  selector: 'j-nav-vertical-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class JNavVerticalItemComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  classes = 'nav-item';

  @Input()
  item: JNavItem;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _jNavService: JNavService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    merge(
      this._jNavService.onNavItemAdded,
      this._jNavService.onNavItemUpdated,
      this._jNavService.onNavItemRemoved
    ).pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
