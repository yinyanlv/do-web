import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {JContentComponent} from './content.component';

@NgModule({
  declarations: [
    JContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    JContentComponent
  ]
})
export class JContentModule {
}
