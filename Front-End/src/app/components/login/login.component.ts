import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  message: string;
  identifiant: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(message: string) {
    this.message = message;
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.identifiant, this.password)
    .subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.router.navigateByUrl('/pokemons');
      } else {
        this.setMessage('Identifiant ou mot de passe incorrect.');
        this.password = '';
        this.router.navigateByUrl('/login');
      }
    });
  }
}
