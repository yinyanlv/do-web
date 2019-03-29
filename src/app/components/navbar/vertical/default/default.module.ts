import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {JNavModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';
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
