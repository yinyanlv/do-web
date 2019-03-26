import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalDefaultComponent} from './default.component';
import {JContentModule} from '../../../../ngx-joy/components/content/content.module';

@NgModule({
  declarations: [VerticalDefaultComponent],
  imports: [
    CommonModule,
    JContentModule
  ],
  exports: [
    VerticalDefaultComponent
  ]
})
export class VerticalDefaultModule {
}
