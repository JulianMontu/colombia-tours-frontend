import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { Solicitud } from '../../pages/solicitudes/services/solicitudes.service';

@Component({
  selector: 'app-card-solicitud',
  imports: [CommonModule, RouterModule, PrimengModule],
  templateUrl: './card-solicitud.component.html',
  styleUrl: './card-solicitud.component.scss'
})
export class CardSolicitudComponent {
  @Input() listSolicitudes: Solicitud[] = [];
}
