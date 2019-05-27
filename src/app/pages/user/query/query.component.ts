import {Component, ComponentRef, OnInit, ViewChildren} from '@angular/core';
import {MatFormField} from '@angular/material';

@Component({
  selector: 'query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  fields: any[] = [{
    type: 'text',
    label: '用户名',
    name: 'name'
  }];

  @ViewChildren(MatFormField)
  fieldCmps: ComponentRef<MatFormField>[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.fieldCmps);
  }
}
