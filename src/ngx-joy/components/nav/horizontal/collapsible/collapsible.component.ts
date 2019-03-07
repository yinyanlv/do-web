import {Component, HostListener, Input, OnInit} from '@angular/core';
import {JNavItem} from '../../nav.component';

@Component({
  selector: 'j-nav-horizontal-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class JNavHorizontalCollapsibleComponent implements OnInit {

  isOpen: boolean = false;

  @Input()
  item: JNavItem;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  open(): void {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  close(): void {
    this.isOpen = false;
  }
}
