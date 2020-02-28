import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../services/encounter.service';
import { IEncounter } from '../store/encounter.store';
import { FormControl } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EncounterDialogComponent } from './encounter-dialog/encounter-dialog.component';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {

  public encounters: IEncounter[];
  public searchControl = new FormControl();

  constructor(
    private service: EncounterService,
    private dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.encounters = this.service.Encounters;
    this.searchControl.valueChanges
    .subscribe(val => {
          this.encounters = this.service.Encounters.filter(encounter => encounter.name.toLowerCase().includes(val.toLowerCase()));
      });
  }

  public NewEncounter(name: string) {
    this.service.CreateEncounter(name, []);
    this.encounters = this.service.Encounters;
  }

  public UpdateEncounter(encounter: IEncounter) {
    this.service.UpdateEncounter(encounter);
    this.encounters = this.service.Encounters;
  }

  public DeleteEncounter(encounter: IEncounter) {
    this.service.DeleteEncounter(encounter);
    this.encounters = this.service.Encounters;
  }

  public deleteAction = (en) => this.DeleteEncounter(en);

  public addEncounterClick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(EncounterDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data.name && data.name.length > 0) {
        this.NewEncounter(data.name);
      }
    });
  }
}
