import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';

import {QueryComponent} from './query/query.component';
import {GridComponent} from './grid/grid.component';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _cmpFactoryResolver: ComponentFactoryResolver
  ) {
  }

  @ViewChild('queryGridContainer', {
    read: ViewContainerRef
  })
  queryGridContainer: ViewContainerRef;

  ngOnInit(
  ) {
    const queryFactory = this._cmpFactoryResolver.resolveComponentFactory(QueryComponent);
    const gridFactory = this._cmpFactoryResolver.resolveComponentFactory(GridComponent);
    this.queryGridContainer.createComponent(queryFactory);
    this.queryGridContainer.createComponent(gridFactory);
  }
}
