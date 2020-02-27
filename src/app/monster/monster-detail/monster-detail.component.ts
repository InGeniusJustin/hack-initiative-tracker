import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MonsterService } from 'src/app/services/monster.service';
import { IMonster } from 'src/app/store/monster-defaults';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit {

  public monster$: Observable<IMonster>;

  constructor(
    private route: ActivatedRoute,
    private service: MonsterService,
  ) { }

  ngOnInit() {
    this.monster$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => {
        const name = params.get('name');
        if (name) {
          return this.service.Monsters.find(monster => monster.Name.toLowerCase() === name.replace(/-/g, ' '));
        }
        return undefined;
      })
    );
  }

}
