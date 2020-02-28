import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterMonsterComponent } from './encounter-monster.component';

describe('EncounterMonsterComponent', () => {
  let component: EncounterMonsterComponent;
  let fixture: ComponentFixture<EncounterMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
