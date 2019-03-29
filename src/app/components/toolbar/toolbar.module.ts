import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {JSearchBarModule, JShortcutsModule} from 'src/ngx-joy/components';
import {JSharedModule} from 'src/ngx-joy/shared.module';
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
