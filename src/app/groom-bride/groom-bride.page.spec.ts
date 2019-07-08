import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomBridePage } from './groom-bride.page';

describe('PeoplePage', () => {
  let component: GroomBridePage;
  let fixture: ComponentFixture<GroomBridePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomBridePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomBridePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
