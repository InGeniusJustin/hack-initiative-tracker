import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/store/monster-defaults';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MonsterEncounterDialogComponent } from '../monster-encounter-dialog/monster-encounter-dialog.component';
import { IEncounter } from 'src/app/store/encounter.store';
import { EncounterService } from 'src/app/services/encounter.service';

@Component({
  selector: 'app-monster-detail-small',
  templateUrl: './monster-detail-small.component.html',
  styleUrls: ['./monster-detail-small.component.scss']
})
export class MonsterDetailSmallComponent implements OnInit {

  @Input() monster: IMonster;
  @Input() isMonsterList: boolean;
  @Input() numMonsters?: number;
  @Input() encounter?: IEncounter;
  constructor(
    private dialog: MatDialog,
    private encounterService: EncounterService,
  ) { }

  ngOnInit() {
  }

  public routableMonster(monster: IMonster) {
    return monster.Name.toLowerCase().replace(/ /g, '-');
  }


  public addMonsterToEncounterClick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      monster: this.monster
    };

    this.dialog.open(MonsterEncounterDialogComponent, dialogConfig);
  }

  public removeMonsterFromEncounter() {
    if (this.encounter) {
      const index = this.encounter.monsters.findIndex(mon => mon.Name.toLowerCase() === this.monster.Name.toLowerCase());
      if (index !== undefined && index !== null && index >= 0) {
        this.encounter.monsters.splice(index, 1);
        this.encounterService.UpdateEncounter(this.encounter);
        this.encounterService.Encounters$.subscribe(encounters => {
          encounters.find(en => en.name.toLowerCase() === this.encounter.name.toLowerCase());
        });
      }
    }
  }

}
