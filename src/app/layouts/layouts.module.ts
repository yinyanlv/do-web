import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VerticalDefaultModule} from './vertical/default/default.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VerticalDefaultModule
  ],
  exports: [
    VerticalDefaultModule
  ]
})
export class LayoutsModule {
}
