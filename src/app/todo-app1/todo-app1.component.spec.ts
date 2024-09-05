import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApp1Component } from './todo-app1.component';

describe('TodoApp1Component', () => {
  let component: TodoApp1Component;
  let fixture: ComponentFixture<TodoApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoApp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
