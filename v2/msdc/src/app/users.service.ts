import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localAPIURL = 'http://127.0.0.1:3000/users'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
  ) { }


  validateUser(username: string, password: string): boolean {
    let valid = this.http.post(
      `${this.localAPIURL}/valid`, {username: username, password: password});
    console.log(valid);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
}
