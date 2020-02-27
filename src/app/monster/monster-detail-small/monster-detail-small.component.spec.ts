import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDetailSmallComponent } from './monster-detail-small.component';

describe('MonsterDetailSmallComponent', () => {
  let component: MonsterDetailSmallComponent;
  let fixture: ComponentFixture<MonsterDetailSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterDetailSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDetailSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
