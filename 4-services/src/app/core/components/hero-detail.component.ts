import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../services/hero';

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
  hero = input<Hero>();
}
