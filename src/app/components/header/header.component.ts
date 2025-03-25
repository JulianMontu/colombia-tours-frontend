import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  get items(){
    return this.headerService.items
  }

  get isAutenticated() {
    return this.authService.isAutenticated;
  }

  constructor(private authService: AuthService, private headerService: HeaderService) { }

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
