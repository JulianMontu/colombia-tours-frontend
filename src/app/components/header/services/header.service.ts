import { Injectable } from '@angular/core';
import { AuthService } from '../../../pages/login/services/auth.service';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  items: MenuItem[] | undefined;
  user: any;
  isLogin: boolean = true;

  get isAutenticated() {
    return this.authService.isAutenticated;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initItems();
    this.validateUser();
  }

  initItems() {
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

  validateUser() {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.authService.isAutenticated = true

      if (this.user.role === 'admin') {
        const item = {
          label: 'Usuarios',
          icon: 'pi pi-fw pi-envelope',
          routerLink: ['/users']
        }
        this.items?.push(item);
        this.items;
      } else if (this.user.role === 'user') {
        const item = {
          label: 'Solicitudes',
          icon: 'pi pi-fw pi-envelope',
          routerLink: ['/solicitudes']
        }
        this.items?.push(item);
      }
      
    } else {
      this.initItems();
    }
  }

  logout() {
    this.authService.logout();
    this.validateUser();
  }
}
