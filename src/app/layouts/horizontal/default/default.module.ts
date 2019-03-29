import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material';
import {JSidebarModule, JContentModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';
import {ThemeOptionsModule} from '../../../components/theme-options/theme-options.module';
import {FooterModule} from '../../../components/footer/footer.module';
import {NavbarModule} from '../../../components/navbar/navbar.module';
import {QuickPanelModule} from '../../../components/quick-panel/quick-panel.module';
import {ToolbarModule} from '../../../components/toolbar/toolbar.module';
import {HorizontalLayoutDefaultComponent} from './default.component';

@NgModule({
  declarations: [
    HorizontalLayoutDefaultComponent
  ],
  imports: [
    MatSidenavModule,
    JSharedModule,
    JSidebarModule,
    JContentModule,
    ThemeOptionsModule,
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ],
  exports: [
    HorizontalLayoutDefaultComponent
  ]
})
export class HorizontalLayoutDefaultModule {
}
