import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {JNavItem} from '../../nav.component';
import {jSlideInOutAnimation} from '../../../../animations/slide-in-out';

@Component({
  selector: 'j-nav-vertical-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  animations: [jSlideInOutAnimation]
})
export class JNavVerticalCollapsibleComponent implements OnInit {

  @HostBinding('class')
  classes: string = 'nav-item nav-collapsible';

  @HostBinding('class.open')
  isOpen: boolean = false;

  @Input()
  item: JNavItem;

  constructor() {
  }

  ngOnInit() {
  }

  toggleOpen(e: MouseEvent) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
