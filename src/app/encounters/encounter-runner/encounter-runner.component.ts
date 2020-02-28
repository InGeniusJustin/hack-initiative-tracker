import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEncounter } from 'src/app/store/encounter.store';
import { IMonster } from 'src/app/store/monster-defaults';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EncounterService } from 'src/app/services/encounter.service';
import { map, switchMap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


export interface IEncounterMonster extends IMonster {
  isMonster: boolean;
}
@Component({
  selector: 'app-encounter-runner',
  templateUrl: './encounter-runner.component.html',
  styleUrls: ['./encounter-runner.component.scss']
})
export class EncounterRunnerComponent implements OnInit {

  public encounter$: Observable<IEncounter>;
  public monsters: IEncounterMonster[];

  constructor(
    private route: ActivatedRoute,
    private service: EncounterService,
  ) { }

  ngOnInit() {
    this.encounter$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => params.get('name')),
      switchMap(name => {
        return this.service.Encounters$.pipe(
          map(encounters => {
            return encounters.find(enc => enc.name.toLowerCase() === name.replace(/-/g, ' '));
          })
        );
      })
    );
    this.encounter$.subscribe(encounter => {
        const monsterClones: IEncounterMonster[] = [];
        encounter.monsters.forEach(monster => {
              if (monster.Amount) {
                for (let i = 0; i < monster.Amount; i++) {
                  monsterClones.push(Object.assign({}, monster, {isMonster: true}));
                }
              }
            });
        this.monsters = monsterClones;
      });
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.monsters, event.previousIndex, event.currentIndex);
  }

}
