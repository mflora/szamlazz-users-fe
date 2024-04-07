import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../types/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_PATH= `${comURL()}api/users`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'withCredentials': 'true'
    }),
  };
  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User>{
    return this.http.post<User>(this.BASE_PATH, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_PATH}/${user.id}`, user, this.httpOptions);
  }

  listUsers(): Observable<any> {
    return this.http.get(this.BASE_PATH, this.httpOptions);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.BASE_PATH}/${userId}`, this.httpOptions);
  }

}

export function comURL(): string {
  if (window.location.href.indexOf('localhost') > 0) {
    return 'http://localhost:8888/'
  } else {
    return 'https://obscure-brushlands-56186-7a703ceadfac.herokuapp.com/'
  }
}
