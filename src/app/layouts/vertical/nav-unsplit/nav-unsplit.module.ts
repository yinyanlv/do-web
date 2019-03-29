import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {JSidebarModule, JContentModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';
import {FooterModule} from '../../../components/footer/footer.module';
import {NavbarModule} from '../../../components/navbar/navbar.module';
import {QuickPanelModule} from '../../../components/quick-panel/quick-panel.module';
import {ToolbarModule} from '../../../components/toolbar/toolbar.module';

import {VerticalLayoutNavUnsplitComponent} from './nav-unsplit.component';

@NgModule({
  declarations: [
    VerticalLayoutNavUnsplitComponent
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
    VerticalLayoutNavUnsplitComponent
  ]
})
export class VerticalLayoutNavUnsplitModule {
}
