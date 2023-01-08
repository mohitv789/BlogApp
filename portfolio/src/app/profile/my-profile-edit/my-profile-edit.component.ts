import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ProfileService } from './../profile.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ProfileModel } from './../profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile-edit',
  templateUrl: './my-profile-edit.component.html',
  styleUrls: ['./my-profile-edit.component.css']
})
export class MyProfileEditComponent implements OnInit {

  id!: number;
  editMode: boolean;
  editedProfile: ProfileModel;
  profileForm: FormGroup;
  loggedinUserId: number;
  constructor(
    private route: ActivatedRoute,
    private pService: ProfileService,
    private dsService: DataStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.dsService.fetchProfileByID(+localStorage.getItem("profileid")).subscribe(result => {
      this.editedProfile = result;
      if (result.first_name && result.last_name) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });

    

    setTimeout( () => { 
      this.initForm();
    }, 500 );
  }


  private initForm() {
    let profile_firstName = '';
    let profile_lastName = '';
    let profile_gender = '';
    let profile_city = '';
    let profile_url = '';
    let profile_avatar = '';
    let profile_bio = '';
    let profile_owner: number;
    if (this.editMode) {
      profile_firstName = this.editedProfile.first_name;
      profile_lastName = this.editedProfile.last_name;
      profile_gender = this.editedProfile.gender;
      profile_city = this.editedProfile.city;
      profile_url = this.editedProfile.url;
      profile_avatar = this.editedProfile.avatar;
      profile_bio = this.editedProfile.bio;
      profile_owner = this.editedProfile.user;
    } else {
      profile_owner = JSON.parse(localStorage.getItem("userid"));
    }
    this.profileForm = new FormGroup({
      first_name: new FormControl(profile_firstName, Validators.required),
      last_name: new FormControl(profile_lastName, Validators.required),
      gender: new FormControl(profile_gender, Validators.required),
      city: new FormControl(profile_city, Validators.required),
      url: new FormControl(profile_url, Validators.required),
      avatar: new FormControl(profile_avatar, Validators.required),
      bio: new FormControl(profile_bio),
      user: new FormControl(profile_owner)
    });
  }

  onSubmit() {
    if (this.editMode) {
      console.log("Edited");
      this.pService.updateProfile(+localStorage.getItem("profileid"),this.profileForm.value);
      this.router.navigate(['profile/mine']);      
      
    } else {
      console.log("Added");
      this.pService.addProfile(this.profileForm.value);
      this.router.navigate(['profile/mine']);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../']);
  }

}
