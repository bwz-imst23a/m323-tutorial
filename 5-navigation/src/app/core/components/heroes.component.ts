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
    </li>
  }
</ul>
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
}`
})
export class HeroesComponent {
  heroService = inject(HeroService);
  ngOnInit() {
    this.heroService.load();
  }
}