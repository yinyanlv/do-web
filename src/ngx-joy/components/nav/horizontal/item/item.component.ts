import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {JNavItem} from '../../nav.component';

@Component({
  selector: 'j-nav-horizontal-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class JNavHorizontalItemComponent implements OnInit {

  @HostBinding('class')
  classes = 'nav-item';

  @Input()
  item: JNavItem;

  constructor() { }

  ngOnInit() {
  }

}
