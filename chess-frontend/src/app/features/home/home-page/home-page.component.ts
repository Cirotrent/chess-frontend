import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './home-page.component.html',
  // styleUrl: './home-page.component.css'
})
export class HomeComponent {

  constructor(
    public authService: AuthService, 
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
