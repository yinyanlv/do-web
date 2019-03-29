import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {JNavModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';

import {NavbarVerticalPureComponent} from './pure.component';

@NgModule({
  declarations: [
    NavbarVerticalPureComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    JNavModule,
    JSharedModule
  ],
  exports: [
    NavbarVerticalPureComponent
  ]
})
export class NavbarVerticalPureModule {
}
