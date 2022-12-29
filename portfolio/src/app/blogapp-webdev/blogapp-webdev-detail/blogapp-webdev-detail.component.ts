import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { WebdevService } from '../webdev.service';
import { WebdevPostModel } from '../webdev_post.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blogapp-webdev-detail',
  templateUrl: './blogapp-webdev-detail.component.html',
  styleUrls: ['./blogapp-webdev-detail.component.css']
})
export class BlogappWebdevDetailComponent implements OnInit {

  webPost: WebdevPostModel;
  loggedinUserId:number = JSON.parse(localStorage.getItem("userid"));
  canShowButton: boolean = false;
  postSlug: string;
  id: number;
  constructor(private wdService: WebdevService,
              private dsService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.postSlug = this.wdService.getWebdevPost(this.id)["slug"];
          this.dsService.fetchWebdevPostbyID(this.postSlug).subscribe((data: WebdevPostModel) => {
              this.webPost = {...data}
              this.wdService.currentWebPost.next(this.webPost);
              if (this.loggedinUserId == data.owner) {
                this.canShowButton = true;
              }
            }
          )          
        }
      );
  }
  
  onEditPost() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  transformHtml(htmlTextWithStyle): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }

}
