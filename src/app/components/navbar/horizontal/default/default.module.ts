import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {JNavModule} from '../../../../../ngx-joy/components';
import {JSharedModule} from '../../../../../ngx-joy/shared.module';

import {NavbarHorizontalDefaultComponent} from './default.component';

@NgModule({
  declarations: [
    NavbarHorizontalDefaultComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    JSharedModule,
    JNavModule
  ],
  exports: [
    NavbarHorizontalDefaultComponent
  ]
})
export class NavbarHorizontalDefaultModule {
}
