import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JRouteReuseStrategyService {

  static handles: { [index: string]: DetachedRouteHandle } = {};

  getHandle(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return JRouteReuseStrategyService.handles[this.getKey(route)];
  }

  setHandle(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    JRouteReuseStrategyService.handles[this.getKey(route)] = handle;
  }

  getHandleByUrl(url: string): DetachedRouteHandle {
    return JRouteReuseStrategyService.handles[this.getKeyByUrl(url)];
  }

  setHandleByUrl(url: string, route: DetachedRouteHandle): void {

  }

  deleteHandleByUrl(url: string): void {
    delete JRouteReuseStrategyService.handles[this.getKeyByUrl(url)];
  }

  clearHandles(): void {
    JRouteReuseStrategyService.handles = {};
  }

  private getKey(route: any): string {

    return route._routerState.url.replace(/\//g, '_');
  }

  private getKeyByUrl(url: string): string {
    return url.replace(/\//g, '_');
  }
}
