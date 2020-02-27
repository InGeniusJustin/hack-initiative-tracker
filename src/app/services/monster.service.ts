import { Injectable } from '@angular/core';
import { DefaultMonsters, IMonster } from '../store/monster-defaults';


@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  constructor() { }

  public get Monsters(): IMonster[] {
    return Object.assign([], DefaultMonsters);
  }
}
