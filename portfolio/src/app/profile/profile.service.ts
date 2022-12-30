import { ProfileModel } from './profile.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  public profiles: ProfileModel[] = [];
  public myProfile: ProfileModel;
  constructor(private dsService: DataStorageService,private http: HttpClient) {}

  getProfiles() {
    return this.dsService.fetchAllProfile().subscribe(result =>
      this.profiles = result 
    );
  }

  getMyProfile(id:number) {
    return this.dsService.fetchMyProfile(id);
  }

  getMyProfileFromProfiles(index: number) {
    return this.profiles[index];
  }
  updateProfile(id:number,newProfile:ProfileModel) {
    return this.dsService.updateMyProfile(id,newProfile).subscribe();
  }

  addProfile(profile:ProfileModel) {
    return this.dsService.addMyProfile(profile).subscribe();
  }


}
