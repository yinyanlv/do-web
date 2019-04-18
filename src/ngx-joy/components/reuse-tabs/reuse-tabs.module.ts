import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatTabsModule, MatIconModule} from '@angular/material';
import {JReuseTabsComponent} from './reuse-tabs.component';

@NgModule({
  declarations: [
    JReuseTabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    JReuseTabsComponent
  ]
})
export class JReuseTabsModule {
}
