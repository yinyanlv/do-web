import {Injectable} from '@angular/core';

import {JSidebarComponent} from './sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class JSidebarService {

  private _registry: { [key: string]: JSidebarComponent } = {};

  constructor() {
  }

  register(key, sidebar): void {
    if (this._registry[key]) {
      console.error(`The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`);

      return;
    }

    this._registry[key] = sidebar;
  }

  unregister(key): void {
    if (!this._registry[key]) {
      console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);
    }

    delete this._registry[key];
  }

  getSidebar(key): JSidebarComponent {
    if (!this._registry[key]) {
      console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);

      return;
    }

    return this._registry[key];
  }
}
