import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JSidebarComponent} from './sidebar.component';

@NgModule({
  declarations: [JSidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JSidebarComponent
  ]
})
export class JSidebarModule {
}
