import { Routes } from '@angular/router';
import { IndexComponent } from './layouts/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'contact',
                component: ContactComponent,
            },
            {
                path: '**',
                redirectTo: 'home',
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
