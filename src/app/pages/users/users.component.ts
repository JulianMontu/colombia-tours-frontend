import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-users',
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  get users(){
    return this.authService.users
  }
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}
