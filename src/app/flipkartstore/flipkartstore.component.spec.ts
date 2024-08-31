import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartstoreComponent } from './flipkartstore.component';

describe('FlipkartstoreComponent', () => {
  let component: FlipkartstoreComponent;
  let fixture: ComponentFixture<FlipkartstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
