import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heroes } from './core/heroes/heroes';
import { Messages } from './core/messaging/messages';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Heroes, Messages ],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <main>
      <app-heroes></app-heroes>
    </main>
    <aside>
      <app-messages></app-messages>
    </aside>
    
    <router-outlet />
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
  `,
})
export class App {
  protected readonly title = signal('Tour of Heroes');
}
