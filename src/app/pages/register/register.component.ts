import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../login/services/auth.service';
import { HeaderService } from '../../components/header/services/header.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
    private headerService: HeaderService
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      Email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const { name, Email, password,  password2} = this.formGroup.value;
      if(password != password2){
        return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Contraseñas no coinciden' });
      }
      this.formGroup.reset();
      const isRegistered = this.authService.register(name, Email, password, 'user');

      if (isRegistered) {
        this.authService.isAutenticated = true;

        this.messageService.add({ severity: 'success', summary: 'Registro exitoso', detail: 'Bienvenido de nuevo' });
        setTimeout(() => {
          this.headerService.validateUser();
          this.router.navigate(['/solicitudes']);
        }, 2000);
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El usuario ya se encuentra registrado' });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Verifique que los datos sean correctos' });
    }
  }

}
