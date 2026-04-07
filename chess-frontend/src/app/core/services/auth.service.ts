import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9090/auth';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
  }
  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials, { responseType: 'text' });
  }
  // login(credentials: any) {
  //   return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
  //     tap(res => {
  //       console.log
  //       localStorage.setItem('token', res);
  //       // localStorage.setItem('roles', JSON.stringify(res.roles));
  //     })
  //   );
  // }
  // register(user: any) {
  //   return this.http.post<any>(`${this.baseUrl}/register`, user);
  //   // .pipe(
  //   //   tap(res => {
  //   //     localStorage.setItem(this.tokenKey, res.token);
  //   //     localStorage.setItem(this.rolesKey, JSON.stringify(res.roles));
  //   //   })
  //   // );
  // }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

 
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  hasRole(role: string): boolean {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');
    return roles.includes(role);
  }
}
