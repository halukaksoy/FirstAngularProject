import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../todo/todo';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }
  path: string = "https://jsonplaceholder.typicode.com/";
  getToDos(userId: number):Observable<ToDo[]> {
    if (userId) {
     return this.http.get<ToDo[]>(this.path + "todos?userId=" + userId);
    }
    else {
     return this.http.get<ToDo[]>(this.path + "todos");
    }

  }

}
