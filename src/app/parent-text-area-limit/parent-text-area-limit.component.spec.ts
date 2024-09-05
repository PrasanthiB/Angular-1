import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTextAreaLimitComponent } from './parent-text-area-limit.component';

describe('ParentTextAreaLimitComponent', () => {
  let component: ParentTextAreaLimitComponent;
  let fixture: ComponentFixture<ParentTextAreaLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTextAreaLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTextAreaLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
