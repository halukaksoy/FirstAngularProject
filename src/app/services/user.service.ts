import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../todo/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient

  ) { }
  path: string = "https://jsonplaceholder.typicode.com/";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + "users");
  }
}