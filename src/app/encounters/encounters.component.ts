import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../services/encounter.service';
import { IEncounter } from '../store/encounter.store';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {

  public encounters: IEncounter[];
  public searchControl = new FormControl();

  constructor(private service: EncounterService) { }

  ngOnInit() {
    this.encounters = this.service.Encounters;
    this.searchControl.valueChanges
    .subscribe(val => {
        if (val.length > 0) {
          this.encounters = this.service.Encounters.filter(encounter => encounter.name.toLowerCase().includes(val.toLowerCase()));
        }
      });
  }

  public NewEncounter(name: string) {
    this.service.CreateEncounter(name, []);
    this.encounters = this.service.Encounters;
  }

  public UpdateEncounter(encounter: IEncounter) {
    this.service.UpdateEncounter(encounter);
    this.encounters = this.service.Encounters;
  }

  public DeleteEncounter(encounter: IEncounter) {
    this.service.DeleteEncounter(encounter);
    this.encounters = this.service.Encounters;
  }

  public routableEncounter(encounter: IEncounter) {
    return encounter.name.toLowerCase().replace(/ /g, '-');
  }
}
