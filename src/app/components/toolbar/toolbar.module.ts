import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {JSearchBarModule, JShortcutsModule} from '../../../ngx-joy/components';
import {JSharedModule} from '../../../ngx-joy/shared.module';
import {ToolbarComponent} from './toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    JSharedModule,
    JSearchBarModule,
    JShortcutsModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {
}
