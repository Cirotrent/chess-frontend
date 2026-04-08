import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayService } from '../../../core/services/play.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-ricarica',
  imports: [CommonModule,FormsModule, NgIf],
  standalone: true,
  templateUrl: './ricarica.component.html',
  styleUrl: './ricarica.component.css'
})
export class RicaricaComponent {

  importo: number = 0;
  messaggio = '';
  errore = '';

  constructor(private authService: AuthService,private playService: PlayService) {}

  ricarica() {
    this.playService.ricarica(this.importo).subscribe({
      next: () => {
        this.messaggio = 'Ricarica effettuata';
        this.errore = '';
        this.authService.loadUser();
      },
      error: () => {
        this.errore = 'Errore durante la ricarica';
      }
    });
  }
}
