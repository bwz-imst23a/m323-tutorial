import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroResourceService {
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private readonly heroesUrl = 'api/heroes';  // URL to web api
  http = inject(HttpClient);
  
  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(() => { console.log('fetched heroes.') }),
        catchError((err) => {
          // TODO: send the error to remote logging infrastructure or the MessageService
          console.trace(`fetch failed: ${err}`, err);
          return of([]); // let the app keep running by returning an empty result.
        })
      );
  }

  /** PUT: update the hero on the server */
  put(hero: Hero): Observable<unknown> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError((err) => {
        console.trace(`put failed: ${err}`, err);
        return of();
      })
    );
  }

  /** POST: create the hero on the server */
  post(hero: Omit<Hero, 'id'>): Observable<Hero | null> {
    return this.http.post<Hero | null>(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError((err) => {
        console.trace(`post failed: ${err}`, err);
        return of(null);
      })
    );
  }

  /** DELETE: delete the hero from the server */
  delete(id: number): Observable<unknown> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<unknown>(url, this.httpOptions).pipe(
      catchError((err) => {
        console.trace(`delete failed: ${err}`, err);
        return of();
      })
    );
  }
}
