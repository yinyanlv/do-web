import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VerticalLayoutDefaultModule} from './vertical/default/default.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VerticalLayoutDefaultModule
  ],
  exports: [
    VerticalLayoutDefaultModule
  ]
})
export class LayoutsModule {
}
