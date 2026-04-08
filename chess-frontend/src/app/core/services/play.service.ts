import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private baseUrl = 'http://localhost:9090/play';

  constructor(private http: HttpClient) {}

  ricarica(importo: number) {
    return this.http.post(`${this.baseUrl}/ricarica`, { importo });
  }

  iscriviti(id: number) {
    return this.http.post(`${this.baseUrl}/iscriviti/${id}`, {});
  }

  gioca(id: number) {
    return this.http.post(`${this.baseUrl}/gioca/${id}`, {});
  }
  getTornei() {
    return this.http.get<any[]>(`${this.baseUrl}/lista-tornei`);
  }
   ultimoTorneo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ultimo-torneo`);
  }
  abbandona(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/abbandona`);
  }
}
