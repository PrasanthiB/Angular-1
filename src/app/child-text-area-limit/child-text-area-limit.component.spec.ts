import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextAreaLimitComponent } from './child-text-area-limit.component';

describe('ChildTextAreaLimitComponent', () => {
  let component: ChildTextAreaLimitComponent;
  let fixture: ComponentFixture<ChildTextAreaLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTextAreaLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTextAreaLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
