import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos$;
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
