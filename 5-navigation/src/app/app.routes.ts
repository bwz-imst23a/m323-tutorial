import { Routes } from '@angular/router';
import { HeroesComponent } from './core/components/heroes.component';
import { DashboardComponent } from './core/components/dashboard.component';
import { HeroDetailComponent } from './core/components/hero-detail.component';

export const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];