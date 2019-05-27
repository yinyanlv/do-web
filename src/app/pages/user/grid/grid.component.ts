import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  rows: any[] = [];
  loadingIndicator: boolean = true;
  columns: any[] = [{
    name: '用户名',
    prop: 'name'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }, {
    name: '公司',
    prop: 'company'
  }];

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this._httpClient.get('api/contacts')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.rows = data;
        this.loadingIndicator = false;
      });
  }

  ngOnDestory() {

    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
