import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-solicitudes',
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.scss'
})
export class SolicitudesComponent {
  stateOptions: any[] = [{ label: 'Mis solicitudes', value: true }, { label: 'Nueva solicitud', value: false }];

  value: string = 'off';
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      destino: ['', [Validators.required]],
      tipoTour: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      numeroPersonas: ['', [Validators.required]],
      presupuesto: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.messageService.add({ severity: 'success', summary: 'Login exitoso', detail: 'Bienvenido a la aplicacion' });
      this.formGroup.reset();

    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los datos' });
    }
  }

}
