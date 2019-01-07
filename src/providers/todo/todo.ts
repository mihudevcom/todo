import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [];
  private archivedTodos = [];

  constructor(public http: Http) {
    console.log('Hello TodoProvider Provider');
  }

  editTodo(todoIndex, todoText){
    this.todos[todoIndex] = todoText;
  }

  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  getTodos(){
    return this.todos;
  }

  getArchivedTodos(){
    return this.archivedTodos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

}
