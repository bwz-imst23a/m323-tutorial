import { Injectable, inject, signal } from '@angular/core';
import { Hero } from '../resources/hero';
import { MessageService } from './message.service';
import { HeroResourceService } from '../resources/hero-resource.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  resource = inject(HeroResourceService);
  messageService = inject(MessageService);
  heroes = signal<Hero[]>([]);
  
  constructor() { }
  
  load() {
    this.resource.getHeroes().subscribe(heroes => {
      this.messageService.add('HeroService: fetched heroes');
      this.heroes.set(heroes);
    });
  }

  save(hero: Hero) {
    this.resource.put(hero).subscribe(() => {
      this.messageService.add(`HeroService: updated hero id=${hero.id}`);
    });
  }

  add(name: string) {
    this.resource.post( { name } ).subscribe((hero) => {
      if (hero) {
        this.heroes.set( [ ...this.heroes(), hero ] );
        this.messageService.add(`HeroService: added hero id=${hero.id}`);
      }
    });
  }

  remove(id: number) {
    this.heroes.set(this.heroes().filter(hero => hero.id !== id));
    this.resource.delete(id).subscribe((hero) => {
      this.messageService.add(`HeroService: removed hero id=${id}`);
    });
  }
}
