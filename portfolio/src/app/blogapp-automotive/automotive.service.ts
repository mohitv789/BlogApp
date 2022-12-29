import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AutomotivePostModel } from './automotive_post.model';
import { HttpClient } from '@angular/common/http';
import { AutoBlogSection } from '../shared/auto-blog-section';
@Injectable()
export class AutomotiveService {
  currentSection:Subject<AutoBlogSection> = new Subject();
  public autoPosts: AutomotivePostModel[] = [];

  constructor(private dsService: DataStorageService,private http: HttpClient) {}

  getAutomotivePosts(): Observable<AutomotivePostModel[]> {
    return this.dsService.fetchAutomotivePosts().pipe(
      tap(posts => {
        this.autoPosts = posts;
      })
    );
  }

  getAutomotivePost(index: number) {
    return this.autoPosts[index];
  }

  updateAutoPost(slug:string,newAutoPost:AutomotivePostModel) {
    return this.dsService.updateAutoPost(slug,newAutoPost).subscribe();
  }

  addAutoPost(newAutoPost:AutomotivePostModel) {
    return this.dsService.addAutoPost(newAutoPost).subscribe();
  }


}
