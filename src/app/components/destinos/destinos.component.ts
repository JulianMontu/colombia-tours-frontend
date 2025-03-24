import { Component } from '@angular/core';
import { DestinosService } from './services/destinos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-destinos',
  imports: [CommonModule,RouterModule, PrimengModule],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.scss'
})
export class DestinosComponent {

  tourisctDestinations: any[] = [];

  constructor(private destinosService: DestinosService){}

  getDestinos(){
    this.destinosService.getFindByFilter().subscribe((data:any) => {
      this.tourisctDestinations = data.data;
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    debugger
    this.getDestinos();
  }

}
