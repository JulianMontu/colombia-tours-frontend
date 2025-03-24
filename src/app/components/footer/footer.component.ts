import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,RouterModule, PrimengModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
