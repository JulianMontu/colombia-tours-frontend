import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule 
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
