import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private baseUrl  = 'http://localhost:9090/tornei';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

   getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(torneo: any): Observable<any> {
    return this.http.post(this.baseUrl, torneo);
  }

  update(id: number, torneo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, torneo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // getTornei() {
  //   return this.http.get<any[]>(this.baseUrl);
  // }

  // creaTorneo(torneo: any) {
  //   return this.http.post(this.baseUrl, torneo);
  // }
}
