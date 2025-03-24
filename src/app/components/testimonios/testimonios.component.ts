import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonios',
  imports: [CommonModule, RouterModule, PrimengModule, FormsModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent {
  value: number = 5;
}
