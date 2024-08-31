import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankdetailsComponent } from './view-bankdetails.component';

describe('ViewBankdetailsComponent', () => {
  let component: ViewBankdetailsComponent;
  let fixture: ComponentFixture<ViewBankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
