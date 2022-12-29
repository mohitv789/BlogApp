import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;

  loggedInUserId: number;
  loggedInUserEmail: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
      console.log(!!user);
      this.loggedInUserEmail = JSON.parse(localStorage.getItem("email"));
      this.loggedInUserId = JSON.parse(localStorage.getItem("userid"));
    });
  }

  onLogout() {
    this.isAuth = false;
    this.authService.logout();
  }

}
