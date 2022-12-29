import { WebdevService } from './../../webdev.service';
import { WebdevPostModel } from './../../webdev_post.model';
import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-webdev-like',
  templateUrl: './webdev-like.component.html',
  styleUrls: ['./webdev-like.component.css']
})
export class WebdevLikeComponent implements OnInit {
  @Input() postSlug: string;
  webPost: WebdevPostModel;
  webPostLikes: number;
  loggedinUserId:number = JSON.parse(localStorage.getItem("userid"));
  id: number;
  showlikeButton: boolean = false;

  constructor(private dsService: DataStorageService,private wdService: WebdevService) { }

  ngOnInit(): void {
    this.wdService.currentWebPost.subscribe((result) => {
      this.webPost = {...result};
    })
    setTimeout( () => { this.refreshLikeComponent() }, 200 );
  }

  refreshLikeComponent() {
    this.webPostLikes = this.webPost["liked_by"].length;
    if (this.webPost.liked_by.includes(this.loggedinUserId)) {
      this.showlikeButton = false;
    } else {
      this.showlikeButton = true;
    }
  }

  onLikePost() {
    this.webPost.liked_by.push(this.loggedinUserId);
    this.dsService.updateWebdevPostLikes(this.postSlug,this.webPost).subscribe(res => this.ngOnInit());
    this.showlikeButton = false;
  }
  onUnLikePost() {
    
    this.webPost.liked_by = this.webPost.liked_by.filter(item => item !== this.loggedinUserId);
    this.dsService.updateWebdevPostLikes(this.postSlug,this.webPost).subscribe(res => this.ngOnInit());
    this.showlikeButton = true;
  }
}
