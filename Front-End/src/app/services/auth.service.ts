import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  loginComponent: LoginComponent;

  login(identifiant: string, password: string): Observable<boolean> {
    const isLoggedIn = (identifiant == 'user' && password == 'user');
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
