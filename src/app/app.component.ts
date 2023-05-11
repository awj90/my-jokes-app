import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { JokeService } from './joke.service';
import { Observable } from 'rxjs';
import { Joke } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // inject JokeService to access the service methods
  jokeService = inject(JokeService);

  resp$!: Observable<Joke>;
  prom$!: Promise<Joke>;
  toggle: boolean = false;
  count: number = 0;

  getJokeAsObservable() {
    this.resp$ = this.jokeService.getJokeAsObservable();
    this.toggle = !this.toggle;
    this.count++;
  }

  getJokeAsPromise() {
    this.prom$ = this.jokeService.getJokeAsPromise();
    this.toggle = !this.toggle;
    this.count++;
  }

  showAnswerToJoke() {
    this.toggle = !this.toggle;
  }
}
