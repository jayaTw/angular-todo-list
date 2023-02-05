import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo ;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoComplete:EventEmitter<Todo>=new EventEmitter();
  constructor(){
    this.todo=new Todo();
  }

  ngOnInit(): void {
    
  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo)
  }
  
  onCheckBoxClick(todo:Todo){
    this.todoComplete.emit(todo)
  }
  

}
