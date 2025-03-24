import { Routes } from '@angular/router';
import { IndexComponent } from './layouts/index/index.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
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
