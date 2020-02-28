import { Component, OnInit, Inject } from '@angular/core';
import { EncounterService } from 'src/app/services/encounter.service';
import { IEncounter } from 'src/app/store/encounter.store';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IMonster } from 'src/app/store/monster-defaults';

@Component({
  selector: 'app-monster-encounter-dialog',
  templateUrl: './monster-encounter-dialog.component.html',
  styleUrls: ['./monster-encounter-dialog.component.scss']
})
export class MonsterEncounterDialogComponent implements OnInit {

  public encounters: IEncounter[];
  public encounterControl: FormControl;
  public numberControl: FormControl;

  constructor(
    private encounterService: EncounterService,
    private dialogRef: MatDialogRef<MonsterEncounterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) { }

  ngOnInit() {
    this.encounters = this.encounterService.Encounters;
    this.encounterControl = new FormControl(undefined, []);
    this.numberControl = new FormControl(1, Validators.pattern(/\d*/));
  }

  public save() {
    const encounterName = this.encounterControl.value as string;
    const encounter = this.encounters.find(en => en.name.toLowerCase() === encounterName.toLowerCase());
    if (encounter) {
      const monsterClone = Object.assign({}, this.data.monster) as IMonster;
      const monAmount = parseInt(this.numberControl.value, 10);
      const monIndex = encounter.monsters.findIndex(mon => mon.Name.toLowerCase() === monsterClone.Name.toLowerCase());
      if (monIndex !== undefined && monIndex !== null && monIndex >= 0) {
        encounter.monsters[monIndex].Amount += monAmount;
      } else {
        monsterClone.Amount = monAmount;
        encounter.monsters.push(monsterClone);
      }
      this.encounterService.UpdateEncounter(encounter);
      this.encounters = this.encounterService.Encounters;
    }
    this.dialogRef.close();
  }

  public close() {
    this.dialogRef.close();
  }

}
