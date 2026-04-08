import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../../core/services/play.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-torneo-attivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './torneo-attivo.component.html',
  styleUrl: './torneo-attivo.component.css'
})
export class TorneoAttivoComponent implements OnInit {

  torneo: any = null;
  messaggio = '';

  constructor(private authService: AuthService,private playService: PlayService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.playService.ultimoTorneo().subscribe({
      next: t => this.torneo = t,
      error: () => this.torneo = null
    });
  }

  abbandona() {
    this.playService.abbandona().subscribe(() => {
      this.torneo = null;
      this.messaggio = 'Hai abbandonato il torneo';
    });
  }

  gioca() {
    this.playService.gioca(this.torneo.id).subscribe({
      next: (res: any) => {
        this.messaggio = res?.messaggio || 'Partita giocata';
        this.authService.loadUser();
      },
      error: (err) => {
        this.messaggio = err.error?.message || 'Errore partita';
      }
    });
  }
}
