import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {Tab} from '../reuse-tabs.component';
import {JReuseTabsContextMenuService} from './context-menu.service';

@Directive({
  selector: '[j-reuse-tabs-context-menu]'
})
export class JReuseTabsContextMenuDirective implements OnInit {

  @Input('j-reuse-tabs-context-menu')
  private _item: Tab;

  constructor(
    private _jReuseTabsContextMenuService: JReuseTabsContextMenuService
  ) {
  }

  ngOnInit() {
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(e: MouseEvent): void {

    this._jReuseTabsContextMenuService.showContextMenu(e);
    e.preventDefault();
    e.stopPropagation();
  }
}
