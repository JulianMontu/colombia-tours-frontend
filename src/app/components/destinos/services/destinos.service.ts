import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  url = 'https://api-colombia.com/api/v1/TouristicAttraction/pagedList?Page=1&PageSize=3';

  constructor(private http: HttpClient) { }

  getFindByFilter() {
    return this.http.get(this.url);
  }
}
