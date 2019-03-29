import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {JNavModule} from '../../../../../ngx-joy/components';
import {JSharedModule} from '../../../../../ngx-joy/shared.module';
import {NavbarVerticalDefaultComponent} from './default.component';

@NgModule({
  declarations: [
    NavbarVerticalDefaultComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    JNavModule,
    JSharedModule
  ],
  exports: [
    NavbarVerticalDefaultComponent
  ]
})
export class NavbarVerticalDefaultModule {
}
