import {Directive, Input, OnInit, HostListener, OnDestroy, HostBinding} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {MediaObserver} from '@angular/flex-layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JMatchMediaService} from '../services/match-media.service';
import {JMatSidenavHelperService} from '../services/mat-sidenav-helper.service';

@Directive({
  selector: '[jMatSidenavHelper]'
})
export class JMatSidenavHelperDirective implements OnInit, OnDestroy {
  @HostBinding('class.mat-is-locked-open')
  isLockedOpen: boolean;

  @Input()
  jMatSidenavHelper: string;

  @Input()
  matIsLockedOpen: string;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jMatchMediaService: JMatchMediaService,
    private _jMatSidenavHelperService: JMatSidenavHelperService,
    private _matSidenav: MatSidenav,
    private _mediaObserver: MediaObserver
  ) {
    this.isLockedOpen = true;
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jMatSidenavHelperService.setSidenav(this.jMatSidenavHelper, this._matSidenav);

    if (this._mediaObserver.isActive(this.matIsLockedOpen)) {
      this.isLockedOpen = true;
      this._matSidenav.mode = 'side';
      this._matSidenav.toggle(true);
    } else {
      this.isLockedOpen = false;
      this._matSidenav.mode = 'over';
      this._matSidenav.toggle(false);
    }

    this._jMatchMediaService.onMediaChange
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        if (this._mediaObserver.isActive(this.matIsLockedOpen)) {
          this.isLockedOpen = true;
          this._matSidenav.mode = 'side';
          this._matSidenav.toggle(true);
        } else {
          this.isLockedOpen = false;
          this._matSidenav.mode = 'over';
          this._matSidenav.toggle(false);
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
