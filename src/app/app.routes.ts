import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'items',
        component: ItemPageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
