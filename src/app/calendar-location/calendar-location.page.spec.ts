import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLocationPage } from './calendar-location.page';

describe('PeoplePage', () => {
  let component: CalendarLocationPage;
  let fixture: ComponentFixture<CalendarLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
