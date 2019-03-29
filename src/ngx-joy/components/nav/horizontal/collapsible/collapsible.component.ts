import {Component, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {JConfigService} from '../../../../services/config.service';
import {JNavItem} from '../../nav.component';

@Component({
  selector: 'j-nav-horizontal-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class JNavHorizontalCollapsibleComponent implements OnInit, OnDestroy {
  jConfig: any;
  isOpen = false;

  @HostBinding('class')
  classes = 'nav-item nav-collapsible';

  @Input()
  item: JNavItem;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _jConfigService: JConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (config) => {
          this.jConfig = config;
        }
      );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  @HostListener('mouseenter')
  open(): void {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  close(): void {
    this.isOpen = false;
  }
}
