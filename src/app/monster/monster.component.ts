import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../services/monster.service';
import { IMonster } from '../store/monster-defaults';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {

  public monsters: IMonster[];
  public searchControl = new FormControl();

  constructor(private service: MonsterService) { }

  ngOnInit() {
    this.monsters = this.service.Monsters;
    this.searchControl.valueChanges
    .subscribe(val => {
          this.monsters = this.service.Monsters.filter(monster => monster.Name.toLowerCase().includes(val.toLowerCase()));
      });
  }
}
