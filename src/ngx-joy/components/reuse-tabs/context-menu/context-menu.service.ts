import {ElementRef, Injectable} from '@angular/core';
import {Overlay, OverlayRef, ConnectionPositionPair} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Observable, Subject} from 'rxjs';
import {JReuseTabsContextMenuComponent, JContextMenuAction} from './context-menu.component';
import {JTab} from '../reuse-tabs.component';

@Injectable()
export class JReuseTabsContextMenuService {
  private _overlayRef: OverlayRef;
  private _onContextMenuChange: Subject<any>;

  constructor(
    private _overlay: Overlay
  ) {
    this._onContextMenuChange = new Subject();
  }

  showContextMenu(e: MouseEvent, tab: JTab) {
    this.removeContextMenu();

    const fakeElement = new ElementRef({
      getBoundingClientRect: (): ClientRect => ({
        width: 0,
        height: 0,
        left: e.clientX,
        right: e.clientX,
        top: e.clientY,
        bottom: e.clientY
      })
    });

    const positions = [
      new ConnectionPositionPair(
        {originX: 'start', originY: 'bottom'},
        {overlayX: 'start', overlayY: 'top'},
      ),
      new ConnectionPositionPair(
        {originX: 'start', originY: 'top'},
        {overlayX: 'start', overlayY: 'bottom'},
      ),
    ];

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(fakeElement)
      .withPositions(positions);

    this._overlayRef = this._overlay.create({
      positionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.close(),
    });

    const cmp = this._overlayRef.attach(
      new ComponentPortal(JReuseTabsContextMenuComponent)
    );

    cmp.instance.onContextMenuChange.subscribe((action: JContextMenuAction) => {
      this._onContextMenuChange.next({
        action,
        payload: tab
      });
    });

    // fix: ERROR Error: matMenuTriggerFor: must pass in an mat-menu instance.
    // 需要加一个延迟，可能是因为MatMenu本来就属于entryComponents，实例化的时机可能做了某种延迟，立即调用时，MatMenu尚未实例化，因此报错
    setTimeout(() => {
      cmp.instance.showContextMenu();
    }, 0);
  }

  removeContextMenu() {
    if (!this._overlayRef) {
      return;
    }
    this._overlayRef.detach();
    this._overlayRef.dispose();
    this._overlayRef = null;
  }

  get onContextMenuChange(): Observable<any> {
    return this._onContextMenuChange.asObservable();
  }
}

