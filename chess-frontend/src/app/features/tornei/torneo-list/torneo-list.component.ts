import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../../../core/services/torneo.service';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-torneo-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './torneo-list.component.html',
})
export class TorneoListComponent implements OnInit {

  tornei: any[] = [];

  constructor(
    private torneiService: TorneoService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.torneiService.getAll().subscribe(data => {
      this.tornei = data;
    });
  }

  delete(id: number) {
    if (confirm('Sei sicuro?')) {
      this.torneiService.delete(id).subscribe(() => {
        this.load();
      });
    }
  }
}
