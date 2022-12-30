import { Router } from '@angular/router';
import { ProfileModel } from './../profile/profile.model';
import { ProfileService } from './../profile/profile.service';
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
  constructor(private authService: AuthService,private pService: ProfileService,private router: Router) { }

  ngOnInit() {
    this.pService.getProfiles();
    this.loggedInUserEmail = JSON.parse(localStorage.getItem("email"));
    this.loggedInUserId = JSON.parse(localStorage.getItem("userid"));
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
      console.log(!!user);
    });
  }

  onLogout() {
    this.isAuth = false;
    this.authService.logout();
  }

  onShowMyProfile() {
    this.pService.profiles.forEach(profile => {
      if(profile.user == this.loggedInUserId)
      {
        this.myProfileId = profile["id"];
      }
    })
    this.router.navigate(['profile/'+this.myProfileId]);    
  }

}
