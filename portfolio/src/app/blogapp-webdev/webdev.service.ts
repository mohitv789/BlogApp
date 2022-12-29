import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { HttpClient } from '@angular/common/http';
import { WebdevPostModel } from './webdev_post.model';

@Injectable()
export class WebdevService {
  public webdevPosts: WebdevPostModel[] = [];
  currentWebPost:Subject<WebdevPostModel> = new Subject();
  constructor(private dsService: DataStorageService,private http: HttpClient) {}

  getWebdevPosts(): Observable<WebdevPostModel[]> {
    return this.dsService.fetchWebdevPosts().pipe(
      tap(posts => {
        this.webdevPosts = posts;
      })
    );
  }

  getWebdevPost(index: number) {
    return this.webdevPosts[index];
  }

  updateWebdevPost(slug:string,newWebdevPost:WebdevPostModel) {
    return this.dsService.updateWebdevPost(slug,newWebdevPost).subscribe();
  }

  addWebdevPost(newWebdevPost:WebdevPostModel) {
    return this.dsService.addWebdevPost(newWebdevPost).subscribe();
  }


}
