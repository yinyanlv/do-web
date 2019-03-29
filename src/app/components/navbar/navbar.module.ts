import {NgModule} from '@angular/core';
import {JSharedModule} from 'src/ngx-joy/shared.module';
import {NavbarComponent} from './navbar.component';
import {NavbarVerticalDefaultModule} from './vertical/default/default.module';
import {NavbarVerticalPureModule} from './vertical/pure/pure.module';
import {NavbarHorizontalDefaultModule} from './horizontal/default/default.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    JSharedModule,
    NavbarVerticalDefaultModule,
    NavbarVerticalPureModule,
    NavbarHorizontalDefaultModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule {
}
