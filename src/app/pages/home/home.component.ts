import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from '../../components/inicio/inicio.component';
import { DestinosComponent } from '../../components/destinos/destinos.component';
import { ExperienciasComponent } from '../../components/experiencias/experiencias.component';
import { TestimoniosComponent } from '../../components/testimonios/testimonios.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule, 
    InicioComponent, 
    DestinosComponent, 
    ExperienciasComponent,
    TestimoniosComponent,
    NosotrosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
