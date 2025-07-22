import { Component, input, inject, OnInit, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HeroStore } from './hero-store';
import { MessageHandler } from '../messaging/message-handler';

@Component({
  selector: 'app-hero-detail',
  imports: [ FormsModule, UpperCasePipe ],
  template: `
@if (hero()) {
  <div>
    <h2>{{hero()!.name | uppercase}} Details</h2>
    <div>id: {{hero()!.id}}</div>
    <div>
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" [(ngModel)]="hero()!.name" placeholder="name">
    </div>
  </div>
}
  `,
  styles: ` `
})
export class HeroDetail implements OnInit {
  public readonly id = input<string>();
  protected readonly hero = computed( () => this.heroService.heroes().find(h => h.id === Number(this.id())) )
  private readonly heroService = inject(HeroStore);
  private readonly messageHandler = inject(MessageHandler);

  ngOnInit() {
    this.messageHandler.add(`HeroDetailComponent: fetch hero id=${this.id()}`);
    this.heroService.load();
  }
}