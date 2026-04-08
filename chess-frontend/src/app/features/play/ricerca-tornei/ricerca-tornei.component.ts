import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayService } from '../../../core/services/play.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-ricerca-tornei',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ricerca-tornei.component.html',
  styleUrl: './ricerca-tornei.component.css'
})
export class RicercaTorneiComponent implements OnInit {

  denominazione = '';
  tornei: any[] = [];
  errore = '';

  constructor(private authService: AuthService,private playService: PlayService) {}
  ngOnInit(): void {
   this.cerca()
  }

  cerca() {
    this.playService.getTornei().subscribe({
      next: res => this.tornei = res,
      error: () => this.errore = 'Errore ricerca'
    });
  }

  iscriviti(id: number) {
    this.playService.iscriviti(id).subscribe({
      next: (res : any) =>{
        this.authService.loadUser();
        alert(res.message)
      } ,
      error: err => alert(err.error?.message || 'Errore iscrizione')
    });
  }
}
