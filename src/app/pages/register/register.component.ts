import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../login/services/auth.service';

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
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

  onSubmit() {
    debugger
    if (this.formGroup.valid) {
      const { Email, password } = this.formGroup.value;
      this.formGroup.reset();
      this.authService.register(Email, password, 'user');
      this.messageService.add({ severity: 'success', summary: 'Mensaje enviado', detail: 'Su mensaje ha sido enviado correctamente' });
      this.router.navigate(['/solicitudes']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los datos' });
    }
  }

}
