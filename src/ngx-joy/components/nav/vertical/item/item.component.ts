import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {JNavItem} from '../../nav.component';

@Component({
  selector: 'j-nav-vertical-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class JNavVerticalItemComponent implements OnInit {

  @HostBinding('class')
  classes: string = 'nav-item';

  @Input()
  item: JNavItem;

  constructor() { }

  ngOnInit() {
  }

}
