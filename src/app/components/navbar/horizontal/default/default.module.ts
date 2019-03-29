import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {JNavModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';

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
