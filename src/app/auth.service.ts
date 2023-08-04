import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  login(username: string, password: string) {
    // Implement your authentication logic here
    // For simplicity, just set authenticated to true
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
