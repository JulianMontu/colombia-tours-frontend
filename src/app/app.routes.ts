import { Routes } from '@angular/router';
import { IndexComponent } from './layouts/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

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
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
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
