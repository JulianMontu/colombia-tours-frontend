import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimengModule } from '../../primeng/primeng.module';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const {Email,password} = this.formGroup.value;
      const islogin = this.authService.login(Email,password);
      if(islogin){
        this.router.navigate(['/users']);
        this.messageService.add({ severity: 'success', summary: 'Login exitoso', detail: 'Bienvenido a la aplicacion' });
      }else{
        this.formGroup.reset();
        this.messageService.add({ severity: 'error', summary: 'Login incorrecto', detail: 'Verifique su usuario y contraseña' });
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los datos' });
    }
  }
}
