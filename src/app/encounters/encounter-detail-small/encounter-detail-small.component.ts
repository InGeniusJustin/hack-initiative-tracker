import { Component, OnInit, Input } from '@angular/core';
import { IEncounter } from 'src/app/store/encounter.store';

@Component({
  selector: 'app-encounter-detail-small',
  templateUrl: './encounter-detail-small.component.html',
  styleUrls: ['./encounter-detail-small.component.scss']
})
export class EncounterDetailSmallComponent implements OnInit {

  @Input() encounter: IEncounter;
  @Input() action?: (en: IEncounter) => boolean;

  public numMonsters: number;

  constructor() { }

  ngOnInit() {
    this.numMonsters = 0;
    this.encounter.monsters.forEach(monster => {
      if (monster.Amount) {
        this.numMonsters += monster.Amount;
      }
    });
  }

  public routableEncounter(encounter: IEncounter) {
    return encounter.name.toLowerCase().replace(/ /g, '-');
  }

}
