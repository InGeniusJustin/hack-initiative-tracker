import { Injectable } from '@angular/core';
import { IMonster } from './monster-defaults';

export interface IEncounter {
    name: string;
    monsters: IMonster[];
}

@Injectable({providedIn: 'root'})
export class EncounterStore {
    constructor() {
    }

    public get Encounters(): IEncounter[] {
        return this.retrieveEncounters();
    }

    public CreateEncounter(name: string, monsters: IMonster[]): IEncounter {
        const encounters: IEncounter[] = this.retrieveEncounters();
        const encounter = {name, monsters};
        encounters.push(encounter);
        this.saveEncounters(encounters);
        return encounter;
    }

    public UpdateEncounter(encounter: IEncounter): boolean {
        const encounters: IEncounter[] = this.retrieveEncounters();
        const update = encounters.find(enc => enc.name === encounter.name);
        if (update) {
            update.monsters = encounter.monsters;
            this.saveEncounters(encounters);
            return true;
        }
        return false;
    }

    public DeleteEncounter(encounter: IEncounter): boolean {
        const encounters: IEncounter[] = this.retrieveEncounters();
        const deleteIndex = encounters.findIndex(enc => enc.name === encounter.name);
        if (deleteIndex !== null && deleteIndex !== undefined && deleteIndex >= 0) {
            encounters.splice(deleteIndex, 1);
            this.saveEncounters(encounters);
            return true;
        }
        return false;
    }

    private retrieveEncounters() {
        const storageContents = localStorage.getItem('encounters');
        if (storageContents && storageContents.length > 0) {
            try {
                return JSON.parse(storageContents);
            } catch (err) {
                return [];
            }
        }
        return [];
    }

    private saveEncounters(encounters: IEncounter[]) {
        localStorage.setItem('encounters', JSON.stringify(encounters));
    }
}
