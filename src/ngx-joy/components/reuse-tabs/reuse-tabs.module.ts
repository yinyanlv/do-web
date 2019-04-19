import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatTabsModule, MatIconModule, MatMenuModule, MatCardModule} from '@angular/material';
import {JReuseTabsComponent} from './reuse-tabs.component';
import {JReuseTabsContextMenuComponent} from './context-menu/context-menu.component';
import {JReuseTabsContextMenuDirective} from './context-menu/context-menu.directive';

@NgModule({
  declarations: [
    JReuseTabsComponent,
    JReuseTabsContextMenuComponent,
    JReuseTabsContextMenuDirective
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ],
  exports: [
    JReuseTabsComponent
  ],
  entryComponents: [
    JReuseTabsContextMenuComponent
  ]
})
export class JReuseTabsModule {
}
