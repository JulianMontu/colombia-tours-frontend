import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../login/services/auth.service';
import { Solicitud, SolicitudesService } from './services/solicitudes.service';
import { CardSolicitudComponent } from '../../components/card-solicitud/card-solicitud.component';

@Component({
  selector: 'app-solicitudes',
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    CardSolicitudComponent
  ],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.scss'
})
export class SolicitudesComponent {
  stateOptions = [
    { label: 'Mis Solicitudes', value: 'list' },
    { label: 'Nuevo Tour', value: 'form' }
  ];
  value: string = 'list'; // Valor por defecto
  formGroup!: FormGroup;
  solicitudes: Solicitud[] = [];

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
    private solicitudesService: SolicitudesService
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

  ngOnInit(): void {
    this.solicitudesService.obtenerSolicitudes().subscribe(data => {
      this.solicitudes = data;
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const dateInit = new Date(this.formGroup.value.fechaInicio);

      // Extraer año, mes y día correctamente
      const year = dateInit.getFullYear().toString(); // Obtener solo los últimos 2 dígitos del año
      const month = String(dateInit.getMonth() + 1).padStart(2, '0'); // Mes empieza en 0, se suma 1
      const day = String(dateInit.getDate()).padStart(2, '0'); // Asegurar formato 2 dígitos

      const formattedDate = `${year}-${month}-${day}`; // "yy-mm-dd"

      const nuevaSolicitud = {
        id: this.solicitudes.length + 1, // Generar un ID secuencial
        destino: this.formGroup.value.destino,
        tipoTour: this.formGroup.value.tipoTour,
        fechaInicio: formattedDate, // Aquí usamos el formato correcto
        duracion: this.formGroup.value.duracion,
        numeroPersonas: this.formGroup.value.numeroPersonas,
        presupuesto: this.formGroup.value.presupuesto,
        estado: "Pendiente"
      };

      // Agregar la nueva solicitud a la lista
      this.solicitudes.push(nuevaSolicitud);

      // Mostrar mensaje de éxito
      this.messageService.add({ severity: 'success', summary: 'Solicitud enviada', detail: 'Tu solicitud ha sido agregada' });

      // Resetear el formulario
      this.formGroup.reset();

      this.value = 'list';
    } else {
      // Mostrar mensaje de error si el formulario no es válido
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los datos' });
    }
  }

  cancelar(){
    this.value = 'list';
  }


}
