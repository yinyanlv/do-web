import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {JConfirmDialogComponent} from './confirm-dialog.component';

@NgModule({
  declarations: [
    JConfirmDialogComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    JConfirmDialogComponent
  ]
})
export class JConfirmDialogModule {
}
