import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-encounter-dialog',
  templateUrl: './encounter-dialog.component.html',
  styleUrls: ['./encounter-dialog.component.scss']
})
export class EncounterDialogComponent implements OnInit {

  public form: FormGroup;
  public name: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EncounterDialogComponent>,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [name, []],
    });
  }

  public save() {
    this.dialogRef.close(this.form.value);
  }

  public close() {
    this.dialogRef.close();
  }

}
