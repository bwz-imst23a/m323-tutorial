import { Injectable, inject, signal } from '@angular/core';
import { Hero } from './hero';
import { getHeroes } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  messageService = inject(MessageService);
  heroes = signal<Hero[]>([]);
  constructor() { }
  load() {
    getHeroes().subscribe(heroes => {
      this.messageService.add('HeroService: fetched heroes');
      this.heroes.set(heroes);
    });
  }
}
