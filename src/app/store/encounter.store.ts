import { Injectable } from '@angular/core';
import { IMonster } from './monster-defaults';
import { Observable, Subject, fromEvent, merge, of } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

export interface IEncounter {
    name: string;
    monsters: IMonster[];
}

@Injectable({providedIn: 'root'})
export class EncounterStore {
    private initalEncounters$: Observable<IEncounter[]>;
    private storageEvent$: Observable<IEncounter[]>;
    private encounters$: Observable<IEncounter[]>;
    constructor() {
        this.initalEncounters$ = of(this.retrieveStorageItem());
        this.storageEvent$ = fromEvent(window, 'storage')
        .pipe(
            map(() => this.retrieveStorageItem())
        );

        this.encounters$ = merge(this.initalEncounters$, this.storageEvent$);
        this.encounters$.subscribe(enconuters => console.log(enconuters));
    }

    public get Encounters$(): Observable<IEncounter[]> {
        return this.encounters$;
    }

    public CreateEncounter(name: string, monsters: IMonster[]): void {
        this.encounters$.subscribe(encounters => {
            const encounter = {name, monsters};
            if (!encounters.find(en => en.name.toLowerCase() === encounter.name.toLowerCase())) {
                encounters.push(encounter);
                this.saveEncounters(encounters);
            }
        });
    }

    public UpdateEncounter(encounter: IEncounter): void {
        this.encounters$.subscribe(encounters => {
                const update = encounters.find(enc => enc.name === encounter.name);
                if (update) {
                    update.monsters = encounter.monsters;
                    this.saveEncounters(encounters);
                }
            });

    }

    public DeleteEncounter(encounter: IEncounter): void {
        this.encounters$.subscribe(encounters => {
                const deleteIndex = encounters.findIndex(enc => enc.name === encounter.name);
                if (deleteIndex !== null && deleteIndex !== undefined && deleteIndex >= 0) {
                    encounters.splice(deleteIndex, 1);
                    this.saveEncounters(encounters);
                }
            });
    }

    private retrieveStorageItem(): IEncounter[] {
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
