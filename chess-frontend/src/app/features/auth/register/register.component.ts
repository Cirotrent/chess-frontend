import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
   imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  // styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { nome: '', cognome: '', username: '', password: '', ruolo:'PLAYER' };
  success: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: () => {
        this.success = 'Registrazione completata! Effettua il login';
        this.router.navigate(['/login']);
      },
      error: () => this.error = 'Errore durante la registrazione'
    });
  }
}
