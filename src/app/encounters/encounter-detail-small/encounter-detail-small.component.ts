import { Component, OnInit, Input } from '@angular/core';
import { IEncounter } from 'src/app/store/encounter.store';

@Component({
  selector: 'app-encounter-detail-small',
  templateUrl: './encounter-detail-small.component.html',
  styleUrls: ['./encounter-detail-small.component.scss']
})
export class EncounterDetailSmallComponent implements OnInit {

  @Input() encounter: IEncounter;

  constructor() { }

  ngOnInit() {
  }

}