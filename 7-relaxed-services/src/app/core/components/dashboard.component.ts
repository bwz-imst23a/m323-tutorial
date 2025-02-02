import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterLink ],
  template: `
<h2>Top Heroes</h2>
<div>
@for (hero of heroes(); track hero.id) {
  <a routerLink="/detail/{{ hero.id }}">{{hero.name}}</a>
}
</div>
`,
  styles: `
:host {
  display: block;
  border: 1px solid lightgray;
  padding: 1rem;
  text-align: center;
  width: 65%;
}

a {
  display: inline-block;
  background-color: #3f525c;
  border-radius: 2px;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  text-align: center;
  min-width: 150px;
  margin: .5rem 0 0 .5rem;
}

a:hover {
  background-color: #000;
}`
})
export class DashboardComponent {
  heroService = inject(HeroService);
  heroes = computed(() => this.heroService.heroes().slice(1, 5));
  
  constructor() { }

  ngOnInit(): void {
    this.heroService.load();
  }
}
