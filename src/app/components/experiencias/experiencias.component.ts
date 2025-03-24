import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-experiencias',
  imports: [CommonModule, RouterModule, PrimengModule],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent {
  listExperiencias: any[] = [
    {
      icon: 'bi bi-sunset',
      iconColor: 'rgb(0 56 147)',
      title: 'Playas Caribeñas',
      description:'Relájate en las hermosas playas de San Andrés, Providencia y Santa Marta.'
    },
    {
      icon: 'bi bi-cup-hot',
      iconColor: 'rgb(0 168 89)',
      title: 'Ruta del Café',
      description:'Descubre el proceso del café desde la semilla hasta la taza en fincas tradicionales.'
    },
    {
      icon: 'bi bi-image-alt',
      iconColor: 'rgb(206 17 38)',
      title: 'Trekking',
      description:'Aventúrate en la Ciudad Perdida, el Cocuy o los Nevados con guías expertos.'
    },
    {
      icon: 'bi bi-globe-americas',
      iconColor: 'rgb(0 168 89)',
      title: 'Ecoturismo',
      description:'Explora la biodiversidad del Amazonas, Chocó y la Sierra Nevada.'
    },
    

  ]
  constructor() {}

}
