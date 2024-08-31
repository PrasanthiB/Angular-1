import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailsComponent } from './gmails.component';

describe('GmailsComponent', () => {
  let component: GmailsComponent;
  let fixture: ComponentFixture<GmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
