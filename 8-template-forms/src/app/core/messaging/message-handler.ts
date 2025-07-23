import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageHandler {
  protected readonly messageSignal = signal<string[]>([]);
  public readonly messages = this.messageSignal.asReadonly();

  public add(message: string) {
    this.messageSignal.update((existing) => [ ...existing, message ]);
  }
  public clear() {
    this.messageSignal.set([]);
  }
}