import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'j-reuse-tabs-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class JReuseTabsContextMenuComponent implements OnInit {
  private _onContextMenuChange: Subject<any>;

  @ViewChild('contextMenuTrigger')
  private _contextMenuTrigger: ElementRef;

  constructor(
  ) {
    this._onContextMenuChange = new Subject();
  }

  ngOnInit() {
  }

  get onContextMenuChange(): Observable<any> {
    return this._onContextMenuChange.asObservable();
  }

  handle(action: JContextMenuAction): void {
    this._onContextMenuChange.next(action);
  }

  showContextMenu() {
    this._contextMenuTrigger.nativeElement.click();
  }
}

export type JContextMenuAction = 'close-current' | 'close-other' | 'close-all';
