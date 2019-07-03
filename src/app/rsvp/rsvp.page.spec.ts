import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RsvpPage } from './rsvp.page';

describe('RsvpPage', () => {
  let component: RsvpPage;
  let fixture: ComponentFixture<RsvpPage>;
  let rsvpPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(RsvpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a rsvp of 10 elements', () => {
    rsvpPage = fixture.nativeElement;
    const items = rsvpPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
