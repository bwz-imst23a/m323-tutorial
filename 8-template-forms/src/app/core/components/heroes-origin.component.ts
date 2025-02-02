import { Component, effect, inject, signal } from '@angular/core';
import { HeroResourceService } from '../resources/hero-resource.service';
import { Hero } from '../resources/hero';

@Component({
  selector: 'app-heroes-origin',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h4>Original Data</h4>
      <ul class="origin-list">
        @for (hero of heroes(); track hero.id) {
          <li>{{hero.name}}</li>
        }
      </ul>
    </section>
  `,
  styles: `
:host {
  font-size: 0.6rem;
}
.origin-list {
  display: flex;
  list-style-type: none;
  
  > li {
    margin-right: 0.6rem;
  }
}
  `
})
export class HeroesOriginComponent {
  heroResourceService = inject(HeroResourceService);
  heroes = signal<Hero[]>([]);
  constructor() {
    effect(() => {
      this.heroResourceService.getHeroes().subscribe(heroes => {
        this.heroes.set(heroes);
      });
    });
  }
}
