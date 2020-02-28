import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EncounterService } from 'src/app/services/encounter.service';
import { MonsterService } from 'src/app/services/monster.service';
import { IEncounter } from 'src/app/store/encounter.store';
import { IMonster } from 'src/app/store/monster-defaults';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-encounter-detail',
  templateUrl: './encounter-detail.component.html',
  styleUrls: ['./encounter-detail.component.scss']
})
export class EncounterDetailComponent implements OnInit {

  public encounter$: Observable<IEncounter>;
  public monsters: IMonster[];

  constructor(
    private route: ActivatedRoute,
    private encounterService: EncounterService,
    private monsterService: MonsterService,
  ) { }

  ngOnInit() {
    this.encounter$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => {
        const name = params.get('name');
        if (name) {
          return this.encounterService.Encounters.find(encounter => encounter.name.toLowerCase() === name.replace(/-/g, ' '));
        }
        return undefined;
      })
    );
    this.encounter$.subscribe(encounter => {
        const monsterClones = [];
        encounter.monsters.forEach(monster => {
            const clone = Object.assign({}, monster);
            for (let i = 0; i < monster.Amount; i++) {
              monsterClones.push(clone);
            }
          });
        this.monsters = monsterClones;
      });
  }

}
