import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../services/hero';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ FormsModule, UpperCasePipe ],
  template: `
    <h2>{{hero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label for="name">Hero name: </label>
      <input id="name" [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,
  styles: ` `
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}