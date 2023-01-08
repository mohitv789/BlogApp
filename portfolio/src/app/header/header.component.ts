import { ProfileService } from './../profile/profile.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;
  myProfileId: number;
  loggedInUserId: number;
  loggedInUserEmail: string;
  constructor(private authService: AuthService,private dsService: DataStorageService,private pService: ProfileService,private router: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem("userid"))) {
      this.loggedInUserEmail = JSON.parse(localStorage.getItem("email"));
      this.loggedInUserId = JSON.parse(localStorage.getItem("userid"));
      this.dsService.setProfileFromUserID(JSON.parse(localStorage.getItem("userid")));
    }
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }

  onLogout() {
    this.isAuth = false;
    this.authService.logout();
  }

  onShowMyProfile() {
    this.router.navigate(['profile/mine']);
  }

}
