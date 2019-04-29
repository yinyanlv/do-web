import { Component, OnInit } from '@angular/core';
import {jAnimateChildStaggerAnimation, jNormalInAnimation} from 'src/ngx-joy/animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [jAnimateChildStaggerAnimation, jNormalInAnimation]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
