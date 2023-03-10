import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  template: ''
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.logout();
    this.router.navigate(['/user/login']);
  }
}
