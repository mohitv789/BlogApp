import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProfileService } from './../profile.service';
import { ProfileModel } from './../profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile-detail',
  templateUrl: './myprofile-detail.component.html',
  styleUrls: ['./myprofile-detail.component.css']
})
export class MyprofileDetailComponent implements OnInit {

  id: number;
  myProfile: ProfileModel;
  constructor(private dsService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    if (!!localStorage.getItem("profileid")) {
      this.id = +localStorage.getItem("profileid")
    } else {
      console.log("ID NOT RECORDED");      
    }
    setTimeout(() => {       
      this.dsService.fetchProfileByID(+localStorage.getItem("profileid")).subscribe((data: ProfileModel) => {
        this.myProfile = data;
      })   
    }, 200 );
  }
  
  onEditProfile() {
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

}
