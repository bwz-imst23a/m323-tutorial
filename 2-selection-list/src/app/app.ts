import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heroes } from './core/heroes/heroes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heroes],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <main>
      <app-heroes></app-heroes>
    </main>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Tour of Heroes');
}
