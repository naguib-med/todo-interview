import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();

  onToggle() {
    this.toggleComplete.emit(this.todo.id);
  }

  onDelete() {
    this.deleteTodo.emit(this.todo.id);
  }
}
