import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimengModule } from '../../primeng/primeng.module';

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
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formGroup.reset();
      this.messageService.add({ severity: 'success', summary: 'Mensaje enviado', detail: 'Su mensaje ha sido enviado correctamente' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los datos' });
    }
  }
}
