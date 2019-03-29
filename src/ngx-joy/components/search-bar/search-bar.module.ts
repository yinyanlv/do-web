import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {JSearchBarComponent} from './search-bar.component';

@NgModule({
  declarations: [
    JSearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    JSearchBarComponent
  ]
})
export class JSearchBarModule {
}
