import { Component } from '@angular/core';
import { Hero } from '../services/hero';
import { HEROES } from '../services/mock-heroes';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ HeroDetailComponent ],
  template: `
<h2>My Heroes</h2>
<ul class="heroes">
  @for (hero of heroes; track hero.id) {
    <li [class.selected]="hero === selectedHero">
      <button type="button" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>
        <span class="name">{{hero.name}}</span>
      </button>
    </li>
  }
</ul>
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `,
  styles: `
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  width: 15em;
}

.heroes li {
  display: flex;
}

.heroes button {
  flex: 1;
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: 0;
  border-radius: 4px;
  display: flex;
  align-items: stretch;
  height: 1.8em;
}

.heroes button:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: .1em;
}

.heroes button:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes button.selected {
  background-color: black;
  color: white;
}

.heroes button.selected:hover {
  background-color: #505050;
  color: white;
}

.heroes button.selected:active {
  background-color: black;
  color: white;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

.heroes .name {
  align-self: center;
}`
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}