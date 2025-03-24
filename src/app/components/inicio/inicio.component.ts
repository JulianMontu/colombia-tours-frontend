import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule,RouterModule, PrimengModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
