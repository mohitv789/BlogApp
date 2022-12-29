import { AuthService, AuthResponseData } from './auth.service';
import {
  Component
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,private router: Router,
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.login(email, password);
    } else {
      this.authService.signup(email, password);
    }
    form.reset();
  }

}
