import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterDetailSmallComponent } from './encounter-detail-small.component';

describe('EncounterDetailSmallComponent', () => {
  let component: EncounterDetailSmallComponent;
  let fixture: ComponentFixture<EncounterDetailSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterDetailSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterDetailSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
