import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private baseUrl = 'http://localhost:9090/tornei';

  constructor(private http: HttpClient) {}

  getTornei() {
    return this.http.get<any[]>(this.baseUrl);
  }

  creaTorneo(torneo: any) {
    return this.http.post(this.baseUrl, torneo);
  }
}
