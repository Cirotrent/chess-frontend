import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneoService } from '../../../core/services/torneo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-torneo-form',
  standalone: true,
  imports: [CommonModule,FormsModule, NgIf],
  templateUrl: './torneo-form.component.html',
  styleUrl: './torneo-form.component.css'
})
export class TorneoFormComponent implements OnInit {

  torneo: any = {};
  isEdit = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private service: TorneoService,
    private router: Router
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
      // MODIFICA
      this.isEdit = true;
      this.service.getById(+id).subscribe({
        next: (data) => this.torneo = data,
        error: () => this.error = 'Errore nel caricamento torneo'
      });
    } else {
      // CREATE → inizializza valori di default
      this.isEdit = false;
      this.torneo = {
        denominazione: '',
        eloMinimo: 0,
        quotaIscrizione: 0,
        maxGiocatori: 2
      };
    }
  }

    onSubmit() {
    if (this.isEdit) {
      // UPDATE
      this.service.update(this.torneo.id, this.torneo).subscribe({
        next: () => this.router.navigate(['/tornei_org']),
        error: (err) => this.handleError(err)
      });
    } else {
      // CREATE
      this.service.create(this.torneo).subscribe({
        next: () => this.router.navigate(['/tornei_org']),
        error: (err) => this.handleError(err)
      });
    }
  }
  handleError(err: any) {
    if (err.status === 403) {
      this.error = 'Non autorizzato';
    } else if (err.status === 400) {
      this.error = 'Dati non validi';
    } else {
      this.error = 'Errore generico';
    }
  }
}
