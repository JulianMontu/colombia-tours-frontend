import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule, PrimengModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: [''],
        fragment: 'inicio'
      },
      {
        label: 'Destinos',
        icon: 'pi pi-fw pi-info',
        routerLink: [''],
        fragment: 'destinos'
      },
      {
        label: 'Tours',
        icon: 'pi pi-fw pi-envelope',
        routerLink: [''],
        fragment: 'experiencias'
      },
      {
        label: 'Experiencias',
        icon: 'pi pi-fw pi-envelope',
        routerLink: [''],
        fragment: 'testimonios'
      },
      {
        label: 'Nosotros',
        icon: 'pi pi-fw pi-envelope',
        routerLink: [''],
        fragment: 'nosotros'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
        
      }
    ];
  }
}
