import { Component } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  imports: [CommonModule, RouterModule, PrimengModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

}
