import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  userRegister!: User;

  constructor(private authService: AuthService,private router: Router) {
    this.InitilizeAuthRequest();
  }

  ngOnInit(): void {
    console.log('ngOnInit is running!');
    
    // console.log(this.userRegister); // Check if this gets logged
  }
  register() {
    if (this.userRegister.password != this.userRegister.repeatpassword) {
      alert('Password does not match');
      return;
    }
    else {
      this.authService.register(this.userRegister).subscribe({
        next: (message) => {
          console.log(message);
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          alert(err.message);
        },
      });
    }

    
  }
  InitilizeAuthRequest() {
    this.userRegister = {
      username: '',
      password: '',
      repeatpassword: '',
      email: '',
      phone: '',
    };
   
  }
}
