import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EncounterService } from 'src/app/services/encounter.service';
import { MonsterService } from 'src/app/services/monster.service';
import { IEncounter } from 'src/app/store/encounter.store';
import { IMonster } from 'src/app/store/monster-defaults';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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
  ) { }

  ngOnInit() {
    this.encounter$ = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        const name = params.get('name');
        if (name) {
          return this.encounterService.Encounters$.pipe(
            map(encounters => {
              encounters.find(encounter => encounter.name.toLowerCase() === name.replace(/-/g, ' '));
            })
          );
        }
        return of(undefined);
      })
    );
    this.encounter$.subscribe(encounter => {
        this.monsters = encounter.monsters;
      });
  }

}
