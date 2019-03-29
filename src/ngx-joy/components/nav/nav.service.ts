import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import * as _ from 'lodash';
import {JNavItem} from './nav.component';

@Injectable({
  providedIn: 'root'
})
export class JNavService {
  onItemCollapsed: Subject<any>;
  onItemCollapseToggled: Subject<any>;

  private _onNavChanged: BehaviorSubject<any>;
  private _onNavRegistered: BehaviorSubject<any>;
  private _onNavUnregistered: BehaviorSubject<any>;
  private _onNavItemAdded: BehaviorSubject<any>;
  private _onNavItemUpdated: BehaviorSubject<any>;
  private _onNavItemRemoved: BehaviorSubject<any>;

  private _currentNavKey: string;
  private _registry: { [key: string]: any } = {};

  constructor() {
    this.onItemCollapsed = new Subject();
    this.onItemCollapseToggled = new Subject();

    this._currentNavKey = null;
    this._onNavChanged = new BehaviorSubject(null);
    this._onNavRegistered = new BehaviorSubject(null);
    this._onNavUnregistered = new BehaviorSubject(null);
    this._onNavItemAdded = new BehaviorSubject(null);
    this._onNavItemUpdated = new BehaviorSubject(null);
    this._onNavItemRemoved = new BehaviorSubject(null);
  }

  get onNavChanged(): Observable<any> {
    return this._onNavChanged.asObservable();
  }

  get onNavRegistered(): Observable<any> {
    return this._onNavRegistered.asObservable();
  }

  get onNavUnregistered(): Observable<any> {
    return this._onNavUnregistered.asObservable();
  }

  get onNavItemAdded(): Observable<any> {
    return this._onNavItemAdded.asObservable();
  }

  get onNavItemUpdated(): Observable<any> {
    return this._onNavItemUpdated.asObservable();
  }

  get onNavItemRemoved(): Observable<any> {
    return this._onNavItemRemoved.asObservable();
  }

  register(key, nav): void {
    if (this._registry[key]) {
      console.error(`The nav with the key '${key}' already exists. Either unregister it first or use a unique key.`);

      return;
    }

    this._registry[key] = nav;

    this._onNavRegistered.next([key, nav]);
  }

  unregister(key): void {
    if (!this._registry[key]) {
      console.warn(`The nav with the key '${key}' doesn't exist in the registry.`);
    }

    delete this._registry[key];

    this._onNavUnregistered.next(key);
  }

  getNav(key): any {
    if (!this._registry[key]) {
      console.warn(`The nav with the key '${key}' doesn't exist in the registry.`);

      return;
    }

    return this._registry[key];
  }

  getFlatNav(nav, flatNav: JNavItem[] = []): any {
    for (const item of nav) {
      if (item.type === 'item') {
        flatNav.push(item);

        continue;
      }

      if (item.type === 'collapsible' || item.type === 'group') {
        if (item.children) {
          this.getFlatNav(item.children, flatNav);
        }
      }
    }

    return flatNav;
  }

  getCurrentNav(): any {
    if (!this._currentNavKey) {
      console.warn(`The current nav is not set.`);

      return;
    }

    return this.getNav(this._currentNavKey);
  }

  setCurrentNav(key): void {
    if (!this._registry[key]) {
      console.warn(`The nav with the key '${key}' doesn't exist in the registry.`);

      return;
    }

    this._currentNavKey = key;

    this._onNavChanged.next(key);
  }

  getNavItem(id, nav = null): any | boolean {
    if (!nav) {
      nav = this.getCurrentNav();
    }

    for (const item of nav) {
      if (item.id === id) {
        return item;
      }

      if (item.children) {
        const childItem = this.getNavItem(id, item.children);

        if (childItem) {
          return childItem;
        }
      }
    }

    return false;
  }

  getNavItemParent(id, nav = null, parent = null): any {
    if (!nav) {
      nav = this.getCurrentNav();
      parent = nav;
    }

    for (const item of nav) {
      if (item.id === id) {
        return parent;
      }

      if (item.children) {
        const childItem = this.getNavItemParent(id, item.children, item);

        if (childItem) {
          return childItem;
        }
      }
    }

    return false;
  }

  addNavItem(item, id): void {
    const nav: any[] = this.getCurrentNav();

    if (id === 'end') {
      nav.push(item);

      this._onNavItemAdded.next(true);

      return;
    }

    if (id === 'start') {
      nav.unshift(item);

      this._onNavItemAdded.next(true);

      return;
    }

    const parent: any = this.getNavItem(id);

    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(item);
    }

    this._onNavItemAdded.next(true);
  }

  updateNavItem(id, properties): void {
    const navItem = this.getNavItem(id);

    if (!navItem) {
      return;
    }

    _.merge(navItem, properties);

    this._onNavItemUpdated.next(true);
  }

  removeNavItem(id): void {
    const item = this.getNavItem(id);

    if (!item) {
      return;
    }

    let parent = this.getNavItemParent(id);

    parent = parent.children || parent;

    parent.splice(parent.indexOf(item), 1);

    this._onNavItemRemoved.next(true);
  }
}
