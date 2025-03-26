import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Solicitud {
  id: number;
  destino: string;
  tipoTour: string;
  fechaInicio: string;
  duracion: number;
  numeroPersonas: number;
  presupuesto: number;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = 'assets/database.json'; // Ruta local del archivo JSON

  constructor(private http: HttpClient) {}

  obtenerSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.apiUrl);
  }
}
