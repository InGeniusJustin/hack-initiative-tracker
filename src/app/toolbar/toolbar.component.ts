import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;
  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  public backButtonClick() {
    this.location.back();
  }

}
