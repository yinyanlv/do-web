import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ReuseTabService} from 'reuse-tab';
import {JConfigService} from 'src/ngx-joy/services/config.service';

@Component({
  selector: 'vertical-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayoutDefaultComponent implements OnInit, OnDestroy {
  jConfig: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _route: ActivatedRoute,
    private _reuseTabService: ReuseTabService,
    private _jConfigService: JConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.jConfig = config;
      });

    this._route.params.subscribe(params => {
      this._reuseTabService.title = `编辑 ${params.id}`;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
