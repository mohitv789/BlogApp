import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebdevService } from '../webdev.service';
import { WebdevPostModel } from '../webdev_post.model';

@Component({
  selector: 'app-blogapp-webdev-list',
  templateUrl: './blogapp-webdev-list.component.html',
  styleUrls: ['./blogapp-webdev-list.component.css']
})
export class BlogappWebdevListComponent implements OnInit {

  webBlogPosts: WebdevPostModel[] = [];
  constructor(private wdService: WebdevService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.onFetchData();
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onFetchData() {
    this.wdService.getWebdevPosts().subscribe(
      (data) => {
        this.webBlogPosts = data;
      }
  )}

}
