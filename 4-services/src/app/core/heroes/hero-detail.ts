import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Hero } from './hero';

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
export class HeroDetail {
  public readonly hero = input<Hero | null>(null);
}