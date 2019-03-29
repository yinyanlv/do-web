import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'j-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class JConfirmDialogComponent {
  public confirmMessage: string;

  constructor(
    public dialogRef: MatDialogRef<JConfirmDialogComponent>
  ) {
  }
}
