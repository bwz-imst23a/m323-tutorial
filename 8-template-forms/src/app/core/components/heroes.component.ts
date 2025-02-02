import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ RouterLink ],
  template: `
<h2>My Heroes</h2>
<ul class="heroes">
  @for (hero of heroService.heroes(); track hero.id) {
    <li>
      <a routerLink="/detail/{{hero.id}}">
        <span class="badge">{{hero.id}}</span>
        {{hero.name}}
      </a>
      <button type="button" title="delete hero" class="remove-hero" (click)="remove(hero.id)">X</button>
    </li>
  }
</ul>
<div>
  <h2>Create a Hero</h2>
  <label for="new-hero">Name: </label>
  <input id="new-hero" #heroName />

  <div>
    <!-- (click) passes input value to add() and then clears the input -->
    <button type="button" (click)="add(heroName.value); heroName.value=''">Add hero</button>
  </div>
</div>
  `,
  styles: `
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  display: flex;
}

.heroes li:hover {
  left: .1em;
}

.heroes a {
  color: #333;
  text-decoration: none;
  background-color: #EEE;
  margin: .5em;
  line-height: 1.8em;
  border-radius: 4px;
  display: block;
  width: 100%;
}

.heroes a:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
}

.heroes a:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  text-align: center;
  color: white;
  background-color: #405061;
  min-width: 2rem;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

.heroes .remove-hero {
  height: 1.8rem;
  margin: 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
}
`
})
export class HeroesComponent {
  heroService = inject(HeroService);
  ngOnInit() {
    this.heroService.load();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.add(name);
  }
  remove(id: number): void {
    this.heroService.remove(id);
  }
}