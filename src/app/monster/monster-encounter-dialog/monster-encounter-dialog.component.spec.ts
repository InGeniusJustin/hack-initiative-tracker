import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterEncounterDialogComponent } from './monster-encounter-dialog.component';

describe('MonsterEncounterDialogComponent', () => {
  let component: MonsterEncounterDialogComponent;
  let fixture: ComponentFixture<MonsterEncounterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterEncounterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterEncounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
