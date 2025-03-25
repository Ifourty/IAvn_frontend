import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NewGamePageComponent } from './newGame/new-game-page/new-game-page.component';
import { NotFoundPageComponent } from './notFound/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'newGame',
        component: NewGamePageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
]