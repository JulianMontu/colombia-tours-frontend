import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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

  constructor( private fb: FormBuilder,
    private messageService: MessageService,
  ){
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

}
