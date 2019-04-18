import {ElementRef, Injectable} from '@angular/core';
import {Overlay, OverlayRef, ConnectionPositionPair} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {JReuseTabsContextMenuComponent} from './context-menu.component';

@Injectable()
export class JReuseTabsContextMenuService {
  private _overlayRef: OverlayRef;

  constructor(
    private _overlay: Overlay
  ) {
  }

  showContextMenu(e: MouseEvent) {
    this.removeContextMenu();
    const fakeElement = new ElementRef({
      getBoundingClientRect: (): ClientRect => ({
        width: 0,
        height: 0,
        left: e.clientX,
        right: e.clientX,
        top: e.clientY,
        bottom: e.clientY
      }),
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
      panelClass: 'j-reuse-tabs',
      scrollStrategy: this._overlay.scrollStrategies.close(),
    });
    const cmp = this._overlayRef.attach(
      new ComponentPortal(JReuseTabsContextMenuComponent)
    );

    cmp.instance.subject.next('show');
  }

  removeContextMenu() {
    if (!this._overlayRef) {
      return;
    }
    this._overlayRef.detach();
    this._overlayRef.dispose();
    this._overlayRef = null;
  }
}

