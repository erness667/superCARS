import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
logout() {
    this.authService.logout();
    this.router.navigate(['']);
    window.location.reload();
}
  constructor(private authService: AuthService, private router: Router) {    
   }

   checkLoggedIn(){
      return this.authService.isLoggedIn();
   }
}

