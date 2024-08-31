import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycityLangComponent } from './countrycity-lang.component';

describe('CountrycityLangComponent', () => {
  let component: CountrycityLangComponent;
  let fixture: ComponentFixture<CountrycityLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrycityLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrycityLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
