import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/store/monster-defaults';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MonsterEncounterDialogComponent } from '../monster-encounter-dialog/monster-encounter-dialog.component';

@Component({
  selector: 'app-monster-detail-small',
  templateUrl: './monster-detail-small.component.html',
  styleUrls: ['./monster-detail-small.component.scss']
})
export class MonsterDetailSmallComponent implements OnInit {

  @Input() monster: IMonster;
  @Input() isMonsterList: boolean;
  constructor(
    private dialog: MatDialog,
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

}
