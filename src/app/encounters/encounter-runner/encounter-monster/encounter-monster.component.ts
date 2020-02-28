import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/store/monster-defaults';
import { IEncounter } from 'src/app/store/encounter.store';
import { EncounterService } from 'src/app/services/encounter.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-encounter-monster',
  templateUrl: './encounter-monster.component.html',
  styleUrls: ['./encounter-monster.component.scss']
})
export class EncounterMonsterComponent implements OnInit {

  @Input() monster: IMonster;
  @Input() isMonster: boolean;
  @Input() encounter?: IEncounter;
  constructor(
    private encounterService: EncounterService,
  ) { }

  ngOnInit() {
  }

  public routableMonster(monster: IMonster) {
    return monster.Name.toLowerCase().replace(/ /g, '-');
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
