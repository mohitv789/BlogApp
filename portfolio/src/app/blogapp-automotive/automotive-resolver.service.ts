import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AutomotiveService } from './automotive.service';
import { AutomotivePostModel } from './automotive_post.model';

@Injectable({ providedIn: 'root' })
export class AutomotiveResolverService implements Resolve<AutomotivePostModel[]> {
  constructor(
    private amService: AutomotiveService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const posts = this.amService.autoPosts;

    if (posts.length === 0) {
      return this.amService.getAutomotivePosts();
    } else {
      return posts;
    }
  }
}
