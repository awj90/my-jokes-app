import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Joke } from './models';

@Injectable()
export class JokeService {
  http = inject(HttpClient);

  getJokeAsObservable(): Observable<Joke> {
    return this.http.get<Joke>(
      'https://official-joke-api.appspot.com/random_joke'
    );
  }

  getJokeAsPromise(): Promise<Joke> {
    return lastValueFrom(
      this.http.get<Joke>('https://official-joke-api.appspot.com/random_joke')
    );
  }
}
