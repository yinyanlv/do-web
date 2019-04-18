import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {JReuseTabsContextMenuItemsComponent} from './context-menu-items.component';

@Component({
  selector: 'j-reuse-tabs-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class JReuseTabsContextMenuComponent implements OnInit {
  subject: Subject<any> = new Subject();
  observer$: Observable<any>;

  @ViewChild('contextMenuTrigger')
  contextMenuTrigger: ElementRef;

  @ViewChild(JReuseTabsContextMenuItemsComponent)
  contextMenuItems: JReuseTabsContextMenuItemsComponent;

  constructor() {

    this.observer$ = this.subject.asObservable();

    this.observer$.subscribe((data) => {
      console.log(data);
      this.showContextMenu();
    });
  }

  ngOnInit() {
  }

  handle(action: ContextMenuAction) {

    console.log(action);
  }

  showContextMenu() {
    this.contextMenuTrigger.nativeElement.click();
  }
}

type ContextMenuAction = 'close-current' | 'close-other' | 'close-right' | 'close-all';
