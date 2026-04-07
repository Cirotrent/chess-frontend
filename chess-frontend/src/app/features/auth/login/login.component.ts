import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  // imports: [],
  // templateUrl: './login.component.html',
  // styleUrl: './login.component.css'
  standalone: true,
  imports: [FormsModule, NgIf], 
  templateUrl: './login.component.html'
  // template: `
  //   <h2>Login</h2>
  //   <input [(ngModel)]="username" placeholder="Username">
  //   <input [(ngModel)]="password" type="password" placeholder="Password">
  //   <button (click)="login()">Login</button>
  // `
})
export class LoginComponent {

 credentials = { username: '', password: '' };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(
     this.credentials
    ).subscribe({
      next: (token) => {
      //  this.authService.saveToken(token);
         this.router.navigate(['/'])
        // this.router.navigate(['/tornei']);
      },
      error: () => {
         this.error = 'Login fallito'
         this.authService.logout();
        this.router.navigate(['/login']);
        // alert('Credenziali non valide');
      }
    });
  }
}
