import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsPage } from './greetings.page';

describe('PeoplePage', () => {
  let component: GreetingsPage;
  let fixture: ComponentFixture<GreetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
