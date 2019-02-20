import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private localAPIURL = 'http://127.0.0.1:3000/posts'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.localAPIURL, this.httpOptions)
      .pipe(
        tap(_ => console.log("fetched posts")),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: string): Observable<Post> {
    let post = this.http.get<Post>(
      `${this.localAPIURL}/${id}`, this.httpOptions);
    return post;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
}
