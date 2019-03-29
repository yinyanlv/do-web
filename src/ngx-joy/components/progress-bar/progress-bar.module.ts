import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {JProgressBarComponent} from './progress-bar.component';

@NgModule({
  declarations: [
    JProgressBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    JProgressBarComponent
  ]
})
export class JProgressBarModule {
}
