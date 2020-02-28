import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../services/encounter.service';
import { IEncounter } from '../store/encounter.store';
import { FormControl } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EncounterDialogComponent } from './encounter-dialog/encounter-dialog.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.service.Encounters$.subscribe(encounters => this.encounters = encounters);
    this.searchControl.valueChanges
    .subscribe(val => {
            this.encounters.filter(encounter => encounter.name.toLowerCase().includes(val.toLowerCase()));
      });
  }

  public NewEncounter(name: string) {
    this.service.CreateEncounter(name, []);
  }

  public UpdateEncounter(encounter: IEncounter) {
    this.service.UpdateEncounter(encounter);
  }

  public DeleteEncounter(encounter: IEncounter) {
    this.service.DeleteEncounter(encounter);
  }

  public deleteAction = (en) => this.DeleteEncounter(en);

  public addEncounterClick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(EncounterDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.name && data.name.length > 0) {
        this.NewEncounter(data.name);
      }
    });
  }
}
