import { Component, input, inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ FormsModule, UpperCasePipe ],
  template: `
@if (hero()) {
  @let heroAsObject = hero()!; <!-- assign signal value to heroAsObject and convey that the value is never! undefined -->
  <div>
    <h2>{{heroAsObject.name | uppercase}} Details</h2>
    <div>id: {{heroAsObject.id}}</div>
    <div>
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" [(ngModel)]="heroAsObject.name" placeholder="name">
    </div>
  </div>
}
  `,
  styles: ``
})
export class HeroDetailComponent {
  id = input<string>();
  hero = computed(() => this.heroService.heroes().find(h => h.id === Number(this.id())));
  heroService = inject(HeroService);
  messageService = inject(MessageService);

  ngOnInit() {
    this.messageService.add(`HeroDetailComponent: fetch hero id=${this.id()}`);
    this.heroService.load();
  }
}
