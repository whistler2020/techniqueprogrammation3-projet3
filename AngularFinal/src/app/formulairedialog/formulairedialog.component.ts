import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Objetvoyage } from '../objetvoyage';

@Component({
  selector: 'app-formulairedialog',
  templateUrl: './formulairedialog.component.html',
  styleUrls: ['./formulairedialog.component.css']
})
export class FormulairedialogComponent {

  constructor(public dialogRef: MatDialogRef<FormulairedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Objetvoyage) { 

    }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
