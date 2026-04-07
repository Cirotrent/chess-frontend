import { Component } from '@angular/core';
import { TorneoService } from '../../../core/services/torneo.service';
import { CommonModule } from '@angular/common';
import { PlayService } from '../../../core/services/play.service';

@Component({
  selector: 'app-tornei-list',
  // imports: [],
  // templateUrl: './tornei-list.component.html',
  // styleUrl: './tornei-list.component.css'
   standalone: true,
  imports: [CommonModule], // 👈 AGGIUNGI QUESTO
   template: `
    <h2>Tornei</h2>
    <ul>
      <li *ngFor="let t of tornei">
        {{ t.denominazione }} - ELO: {{ t.eloMinimo }}
      </li>
    </ul>
  `
})
export class TorneiListComponent {

  tornei: any[] = [];

  constructor(private playService: PlayService) {}

  ngOnInit() {
    this.playService.getTornei().subscribe(data => {
      this.tornei = data;
    });
  }
}
