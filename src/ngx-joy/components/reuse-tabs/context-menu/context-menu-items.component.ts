import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenu} from '@angular/material';

@Component({
  selector: 'j-reuse-tabs-context-menu-items',
  template: `
    <mat-menu>
      <button mat-menu-item (click)="handle('close-current')">关闭当前</button>
      <button mat-menu-item (click)="handle('close-other')">关闭其他</button>
      <button mat-menu-item (click)="handle('close-right')">关闭右侧</button>
      <button mat-menu-item (click)="handle('close-all')">全部关闭</button>
    </mat-menu>
  `
})
export class JReuseTabsContextMenuItemsComponent implements OnInit {
  constructor() {
  }

  @ViewChild(MatMenu)
  menu: MatMenu;

  ngOnInit() {
  }

  handle(action: ContextMenuAction) {

    console.log(action);
  }
}

type ContextMenuAction = 'close-current' | 'close-other' | 'close-right' | 'close-all';
