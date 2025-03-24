import { Component } from '@angular/core';
import { DestinosService } from './services/destinos.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-destinos',
  imports: [CommonModule, RouterModule, PrimengModule],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.scss'
})
export class DestinosComponent {

  tourisctDestinations: any[] = [];

  constructor(
    private destinosService: DestinosService,
    private router: Router
  ) { }

  getIconByIndex(index: number): string {
    const icons = ['pi pi-map', 'pi pi-star', 'pi pi-globe']; // Clases de iconos de PrimeIcons
    return icons[index] || 'pi pi-question'; // Si hay más de 3, usa un icono por defecto
  }

  
  getDestinos() {
    this.destinosService.getFindByFilter().subscribe((data: any) => {
      this.tourisctDestinations = data.data.map((item: any, index: number) => ({
        ...item, // Mantiene las propiedades originales
        icon: this.getIconByIndex(index) // Asigna un ícono según la posición
      }));
    });
  }

  ngOnInit(): void {
    this.getDestinos();
  }

  getFirstSentence(description: string): string {
    if (!description) return ''; // Evita errores si la descripción es null o undefined
    const firstSentence = description.split('.')[0]; // Toma el texto hasta el primer punto
    return firstSentence + '.'; // Asegura que el punto final se mantenga
  }

  goToTours() {
    window.location.href = 'https://api-colombia.com/';
  }
}
