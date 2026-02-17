import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';

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
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'menu',
        component: ItemPageComponent
    }
];
