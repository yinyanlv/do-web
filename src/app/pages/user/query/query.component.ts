import {AfterViewInit, Component, ComponentRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatFormField, MatInput} from '@angular/material';

@Component({
  selector: 'query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit, AfterViewInit {

  fields: any[] = [{
    type: 'text',
    label: '用户名',
    name: 'name'
  }, {
    type: 'text',
    label: '用户名',
    name: 'name'
  }, {
    type: 'text',
    label: '用户名',
    name: 'name'
  }, {
    type: 'text',
    label: '用户名',
    name: 'name'
  }, {
    type: 'text',
    label: '用户名',
    name: 'name'
  }, {
    type: 'text',
    label: '用户名',
    name: 'name'
  }, {
    type: 'text',
    label: '用户名',
    name: 'name'
  }];

  @ViewChildren(MatInput)
  fieldComponents: QueryList<MatInput>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
