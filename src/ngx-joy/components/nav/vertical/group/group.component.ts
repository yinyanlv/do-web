import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {JNavItem} from '../../nav.component';

@Component({
  selector: 'j-nav-vertical-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class JNavVerticalGroupComponent implements OnInit {

  @HostBinding('class')
  classes: string = 'nav-item nav-group';

  @Input()
  item: JNavItem;

  constructor() { }

  ngOnInit() {
  }

}
