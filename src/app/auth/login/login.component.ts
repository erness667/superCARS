import { Component } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authRequest!: User;
  constructor(private authService: AuthService, private router: Router) { 
    this.InitilizeAuthRequest();
  }


  login(){
    this.authService.login(this.authRequest).subscribe({
      next: (authResponse)=>{console.log(authResponse); this.authService.setToken("Bearer " + authResponse.token);
                            this.authService.setUserInfo(authResponse.username); 
                              this.router.navigate(['']);
      },
      error: (err)=>{ alert("Login was unsuccessful: " + err.message) }
    })
  }

  InitilizeAuthRequest() {
    this.authRequest = {
      username: '',
      password: '',
      repeatpassword: '',
      email: '',
      phone: '',
    };
  }
}
