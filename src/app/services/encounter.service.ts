import { Injectable } from '@angular/core';
import { EncounterStore, IEncounter } from '../store/encounter.store';
import { IMonster } from '../store/monster-defaults';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  constructor(private store: EncounterStore) { }

  public get Encounters$() {
    return this.store.Encounters$;
  }

  public CreateEncounter(name: string, monsters: IMonster[]) {
    return this.store.CreateEncounter(name, monsters);
  }

  public UpdateEncounter(encounter: IEncounter) {
    return this.store.UpdateEncounter(encounter);
  }

  public DeleteEncounter(encounter: IEncounter) {
    return this.store.DeleteEncounter(encounter);
  }
}
