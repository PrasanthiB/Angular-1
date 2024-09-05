import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApp3Component } from './todo-app3.component';

describe('TodoApp3Component', () => {
  let component: TodoApp3Component;
  let fixture: ComponentFixture<TodoApp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoApp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoApp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
