import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
   standalone: true,
  imports: [NgIf, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  
  user: any;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.user$.subscribe(u => this.user = u);
  }



  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
