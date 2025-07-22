import { Component, inject } from '@angular/core';
import { MessageHandler } from './message-handler';

@Component({
  selector: 'app-messages',
  imports: [],
  template: `
    <div>
      <h1>Messages</h1>
      @if (messageHandler.messages().length) {
        <button type="button" class="clear" (click)="messageHandler.clear()">Clear messages</button>
        @for (message of messageHandler.messages(); track $index) {
          <h4>{{message}}</h4>
        }
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      position: fixed;
      overflow: auto;
      top: 0;
      right: 0;
      padding: 2rem;
      width: 400px;
      height: 100vh;
      background-color: lightgray;
    }
  `
})
export class Messages {
  protected readonly messageHandler = inject(MessageHandler);
}
