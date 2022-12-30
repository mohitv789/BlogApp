import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
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
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.dsService.fetchMyProfile(this.id).subscribe((data: ProfileModel) => {
            this.myProfile = data;
          }) 
        }
      )   
  }
  
  onEditProfile() {
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

}
