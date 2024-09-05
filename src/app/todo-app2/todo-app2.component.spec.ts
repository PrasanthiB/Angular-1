import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApp2Component } from './todo-app2.component';

describe('TodoApp2Component', () => {
  let component: TodoApp2Component;
  let fixture: ComponentFixture<TodoApp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoApp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
