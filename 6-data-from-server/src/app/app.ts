import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Messages } from './core/messaging/messages';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink, Messages ],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <main>
      <router-outlet />
    </main>
    <aside>
      <app-messages></app-messages>
    </aside>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    main {
      flex: 1;
    }

    nav a {
      padding: 1rem;
      text-decoration: none;
      margin: 0.5rem;
      display: inline-block;
      background-color: #e8e8e8;
      color: #3d3d3d;
      border-radius: 4px;
    }
    nav a:hover {
      color: white;
      background-color: #42545C;
    }
    nav a:active {
      background-color: black;
    }
  `,
})
export class App {
  protected readonly title = signal('Tour of Heroes');
}
