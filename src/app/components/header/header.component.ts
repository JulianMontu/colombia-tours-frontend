import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../pages/login/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule, PrimengModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  user: any;
  isLogin: boolean = true; 

  get isAutenticated(){
    return this.authService.isAutenticated;
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.validateUser();
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

  validateUser(){
    this.user = this.authService.getCurrentUser();
    if(this.user) this.authService.isAutenticated = true;
  }

  logout(){
    this.authService.logout();
  }
}
