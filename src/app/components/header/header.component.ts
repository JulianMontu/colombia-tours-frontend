import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../pages/login/services/auth.service';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, PrimengModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: any;
  isLogin: boolean = true;
  mobile: boolean = false;

  get items(){
    return this.headerService.items
  }

  get isAutenticated() {
    return this.authService.isAutenticated;
  }

  get windowWidth() {
    return window.innerWidth;
  }

  constructor(private authService: AuthService, private headerService: HeaderService) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobile = window.innerWidth < 850;
  }

  ngOnInit() {
    this.headerService.initItems();
    this.headerService.validateUser();
    
  }

  validateUser(){
    this.headerService.validateUser();
  }
  logout() {
    this.authService.logout();
    this.headerService.validateUser();
  }
}
