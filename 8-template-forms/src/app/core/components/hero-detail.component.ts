import { Component, input, inject, computed } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { Hero } from '../resources/hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ FormsModule, UpperCasePipe ],
  template: `
<form #heroForm="ngForm">
  @if (hero()) {
    @let heroAsObject = editableHero();
    <div>
      <h2>{{heroAsObject.name | uppercase}} Details</h2>
      <div>id: {{heroAsObject.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input #name="ngModel" id="hero-name" [(ngModel)]="heroAsObject.name" name="name" placeholder="name" required>
        <span [hidden]="name.valid || name.pristine" class="validation-error">
          * Name is required
        </span>
      </div>
      <div>
        <label for="hero-alter-ego">Alter ego: </label>
        <input id="hero-alter-ego" [(ngModel)]="heroAsObject.alterEgo" name="alterEgo" placeholder="alter ego">
      </div>
      <div>
        <label for="power">Hero power:</label>
        <select id="power" [(ngModel)]="heroAsObject.power" name="power" required>
          @for (pow of powers; track $index) {
            <option [value]="pow">{{pow}}</option>
          }
        </select>
      </div>
    </div>
    <button type="submit" (click)="save(heroForm, heroAsObject)" [disabled]="!heroForm.form.valid">save</button>
  }
</form>
  `,
  styles: `
label {
  display: inline-block;
  margin-top: 0.4rem;
  width: 200px;
}

.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}

.validation-error  {
  color: #a94442;
  font-size: small;
  padding: 4px;
  margin: 4px;
}`
})
export class HeroDetailComponent {
  powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer' ];
  editableHero = computed(() => ({ ...this.hero()! }));

  id = input<string>();
  hero = computed(() => this.heroService.heroes().find(h => h.id === Number(this.id())));
  heroService = inject(HeroService);
  messageService = inject(MessageService);

  ngOnInit() {
    this.messageService.add(`HeroDetailComponent: fetch hero id=${this.id()}`);
    this.heroService.load();
  }
  
  save(form: NgForm, editedHero: Hero): void {
    if (form.valid) {
      this.heroService.save(editedHero);
    }
  }
}
