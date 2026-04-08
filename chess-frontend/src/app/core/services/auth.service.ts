import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9090/auth';
  private TOKEN_KEY = 'token';
  private USERNAME_KEY = 'username';
  private ROLE_KEY = 'ruolo';
  // private CREDITO_KEY = 'montePremi';
  // private ELO_KEY = 'eloRating';
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

   loadUser() {
    this.http.get('http://localhost:9090/play').subscribe(user => {
      this.userSubject.next(user);
    });
  }

  getUser() {
    return this.userSubject.value;
  }

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
        localStorage.setItem(this.ROLE_KEY, JSON.stringify(res.ruolo));
        // localStorage.setItem(this.CREDITO_KEY, JSON.stringify(res.montePremi));
        // localStorage.setItem(this.ELO_KEY, JSON.stringify(res.eloRating));
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
    localStorage.removeItem(this.ROLE_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }
  // getMontePremi(): string | null {
  //   return localStorage.getItem(this.CREDITO_KEY);
  // }
  // getEloRating(): string | null {
  //   return localStorage.getItem(this.ELO_KEY);
  // }

  hasRole(role: string): boolean {
    const roles = JSON.parse(localStorage.getItem(this.ROLE_KEY) || '[]');
    return roles.includes(role);
  }
  getRoles(): string[] {
  const roles = localStorage.getItem(this.ROLE_KEY);
  return roles ? JSON.parse(roles) : [];
  }
  hasAnyRole(roles: string[]): boolean {
  return roles.some(r => this.hasRole(r));
  }
}
