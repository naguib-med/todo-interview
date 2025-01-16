import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  addTodo(title: string): void {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.todos = [...this.todos, todo];
    this.todosSubject.next(this.todos);
  }

  toggleTodo(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(this.todos);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todosSubject.next(this.todos);
  }

  constructor() {}
}
