import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ShareReplayConfig } from 'rxjs';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos:Todo[];
  localItem:string |null;
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if (this.localItem==null){
      this.todos=[]

    }
    else{
      this.todos=JSON.parse(this.localItem)
    }
   
  }

  
  ngOnInit(): void {
    
  }

  deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  
  markAsDone(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!todo.active;
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

}
