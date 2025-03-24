import { Routes } from '@angular/router';
import { IndexComponent } from './layouts/index/index.component';
import { HomeComponent } from './pages/home/home.component';

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
                path: '**',
                redirectTo: 'index',
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
