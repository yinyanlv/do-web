import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {MatMenu} from '@angular/material';

@Component({
  selector: 'j-reuse-tabs-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class JReuseTabsContextMenuComponent implements OnInit {

  @ViewChild('contextMenuTrigger')
  private _contextMenuTrigger: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  handle(action: ContextMenuAction) {

    console.log(action);
  }

  showContextMenu() {
    this._contextMenuTrigger.nativeElement.click();
  }
}

type ContextMenuAction = 'close-current' | 'close-other' | 'close-right' | 'close-all';
