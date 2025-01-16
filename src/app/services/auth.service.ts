import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(email: string, password: string) {
    if (email && password) {
      localStorage.setItem('token', 'fake-jwt-token');
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  register(userData: { name: string; email: string; password: string }) {
    // Simuler un appel API
    return new Observable((observer) => {
      setTimeout(() => {
        // Simuler un succès
        observer.next({ success: true });
        observer.complete();
      }, 1000);
    });
  }

  constructor() {}
}
