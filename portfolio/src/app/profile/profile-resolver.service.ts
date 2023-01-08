import { ProfileService } from './profile.service';
import { ProfileModel } from './profile.model';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProfileResolverService implements Resolve<ProfileModel[]> {
  constructor(
    private pService: ProfileService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const profiles = this.pService.profiles;

    if (profiles.length === 0) {
      this.pService.getProfiles();
      return this.pService.profiles;;
    } else {
      return profiles;
    }
  }
}
