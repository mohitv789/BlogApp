import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutomotiveService } from '../automotive.service';
import { AutomotivePostModel } from '../automotive_post.model';

@Component({
  selector: 'app-blogapp-automotive-list',
  templateUrl: './blogapp-automotive-list.component.html',
  styleUrls: ['./blogapp-automotive-list.component.css']
})
export class BlogappAutomotiveListComponent implements OnInit {
  autoBlogPosts: AutomotivePostModel[] = [];
  constructor(private amService: AutomotiveService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.onFetchData();
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onFetchData(): void {
    this.amService.getAutomotivePosts().subscribe({
      next: (data): void => {
        this.autoBlogPosts = data;
      }
    }
  )}
}
