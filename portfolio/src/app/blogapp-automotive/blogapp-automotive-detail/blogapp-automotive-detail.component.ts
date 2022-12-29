import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AutoBlogSection } from 'src/app/shared/auto-blog-section';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AutomotiveService } from '../automotive.service';
import { AutomotivePostModel } from '../automotive_post.model';

@Component({
  selector: 'app-blogapp-automotive-detail',
  templateUrl: './blogapp-automotive-detail.component.html',
  styleUrls: ['./blogapp-automotive-detail.component.css']
})
export class BlogappAutomotiveDetailComponent implements OnInit {

  autoPost: AutomotivePostModel;
  autoPostSections: AutoBlogSection[] = [];
  loggedinUserId:number = JSON.parse(localStorage.getItem("userid"));
  canShowButton: boolean = false;
  postSlug: string;
  id: number;

  constructor(private amService: AutomotiveService,
              private dsService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.postSlug = this.amService.getAutomotivePost(this.id)["slug"];
          this.dsService.fetchAutomotivePostbyID(this.postSlug).subscribe((data: AutomotivePostModel) => {
              this.destroyExistingSections();
              this.autoPost = data;
              this.fetchSections(this.autoPost);
              if (this.loggedinUserId == data.owner) {
                this.canShowButton = true;
              }
            }
          )
        }
      );
  }

  fetchSections(autoPost:AutomotivePostModel) {
    autoPost.sections.forEach((section:AutoBlogSection) => {
      this.autoPostSections.push(section);
    })
  }

  onEditPost() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  destroyExistingSections() {
      this.autoPostSections = [];
  }

}
