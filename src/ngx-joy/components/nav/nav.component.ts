import {Component, Input, OnInit} from '@angular/core';

export interface JNavItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapsible';
  icon?: string;
  translate?: string;
  hidden?: boolean;
  url?: string;
  externalUrl?: string;
  exactMatch?: boolean;
  classes?: string;
  openInNewTab?: boolean;
  function?: (e: Event, item: any) => any;
  badge?: {
    title?: string;
    translate?: string;
    fg?: string;
    bg?: string;
  };
  children?: JNavItem[];
}

@Component({
  selector: 'j-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class JNavComponent implements OnInit {

  /**
   * @type {string}
   * 'vertical' | 'horizontal'
   */
  @Input()
  layout: string = 'vertical';

  @Input()
  items: JNavItem[];

  constructor() { }

  ngOnInit() {
  }

  isVerticalLayout(): boolean {
    return this.layout === 'vertical';
  }
}
