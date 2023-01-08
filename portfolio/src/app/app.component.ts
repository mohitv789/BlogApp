import { ProfileService } from './profile/profile.service';
import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isAuth:boolean = false;
  constructor(private authService: AuthService,private pService: ProfileService) {}
  ngOnInit() {
    this.authService.autoLogin();
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }
}
