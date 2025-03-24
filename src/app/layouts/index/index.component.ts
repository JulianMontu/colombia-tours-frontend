import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  imports: [CommonModule,HeaderComponent,RouterModule, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
