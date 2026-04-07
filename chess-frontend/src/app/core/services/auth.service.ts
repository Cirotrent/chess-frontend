import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9090/auth';
  private TOKEN_KEY = 'token';
  private USERNAME_KEY = 'username';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
  }
  // login(credentials: any) {
  //   return this.http.post(`${this.baseUrl}/login`, credentials, { responseType: 'text' });
  // }
  login(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem(this.USERNAME_KEY, res.username);
        // localStorage.setItem('roles', JSON.stringify(res.roles));
      })
    );
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

 
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
    // localStorage.removeItem('roles');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  hasRole(role: string): boolean {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');
    return roles.includes(role);
  }
}
