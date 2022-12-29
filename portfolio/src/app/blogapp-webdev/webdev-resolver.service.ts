import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { WebdevService } from './webdev.service';
import { WebdevPostModel } from './webdev_post.model';

@Injectable({ providedIn: 'root' })
export class WebdevResolverService implements Resolve<WebdevPostModel[]> {
  constructor(
    private wdService: WebdevService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const posts: WebdevPostModel[] = this.wdService.webdevPosts;

    if (posts.length === 0) {
      return this.wdService.getWebdevPosts();
    } else {
      return posts;
    }
  }
}
