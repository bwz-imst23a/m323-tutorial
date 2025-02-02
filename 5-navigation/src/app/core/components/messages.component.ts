import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  template: `
<div>
  <h1>Messages</h1>
  @if (messageService.messages().length) {
    <button type="button" class="clear" (click)="messageService.clear()">Clear messages</button>
    @for (message of messageService.messages(); track $index) {
      <h4>{{message}}</h4>
    }
  }
</div>`,
  styles: `
:host {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  padding: 2rem;
  width: 400px;
  height: 100vh;
  background-color: lightgray;
}`
})
export class MessagesComponent {
  messageService = inject(MessageService);
}
