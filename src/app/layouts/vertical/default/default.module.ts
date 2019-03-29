import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {JSidebarModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';
import {JContentModule} from 'src/ngx-joy/components/content/content.module';
import {FooterModule} from '../../../components/footer/footer.module';
import {NavbarModule} from '../../../components/navbar/navbar.module';
import {QuickPanelModule} from '../../../components/quick-panel/quick-panel.module';
import {ToolbarModule} from '../../../components/toolbar/toolbar.module';

import {VerticalLayoutDefaultComponent} from '../../../layouts/vertical/default/default.component';

@NgModule({
  declarations: [
    VerticalLayoutDefaultComponent
  ],
  imports: [
    RouterModule,
    JSharedModule,
    JSidebarModule,
    JContentModule,
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ],
  exports: [
    VerticalLayoutDefaultComponent
  ]
})
export class VerticalLayoutDefaultModule {
}
