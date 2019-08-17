import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from './todo';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService, UserService]
})
export class TodoComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertifyService,
    private todoService: TodoService,
    private userService: UserService) { }

  path: string = "https://jsonplaceholder.typicode.com/";
  todos: ToDo[] = [];
  users: User[] = [];
  todayDate:Date = new Date();
  filterText:string;

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(param => {
      this.getToDos(param["userId"]);
    });
  }

  getToDos(userId: number) {
    this.todoService.getToDos(userId).subscribe(response => {
      this.todos = response;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    });
  }

  likeToDo(todo: ToDo) {
    this.alertService.success("Liked: " + todo.title);
  }
}
