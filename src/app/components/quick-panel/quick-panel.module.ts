import {NgModule} from '@angular/core';
import {MatDividerModule, MatListModule, MatSlideToggleModule} from '@angular/material';
import {JSharedModule} from '../../../ngx-joy/shared.module';
import {QuickPanelComponent} from './quick-panel.component';

@NgModule({
  declarations: [
    QuickPanelComponent
  ],
  imports: [
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,
    JSharedModule
  ],
  exports: [
    QuickPanelComponent
  ]
})
export class QuickPanelModule {
}
