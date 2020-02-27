import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/store/monster-defaults';

@Component({
  selector: 'app-monster-detail-small',
  templateUrl: './monster-detail-small.component.html',
  styleUrls: ['./monster-detail-small.component.scss']
})
export class MonsterDetailSmallComponent implements OnInit {

  @Input() monster: IMonster;
  constructor() { }

  ngOnInit() {
  }

}
