import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { WebdevService } from '../webdev.service';
import { WebdevPostModel } from '../webdev_post.model';

@Component({
  selector: 'app-blogapp-webdev-edit',
  templateUrl: './blogapp-webdev-edit.component.html',
  styleUrls: ['./blogapp-webdev-edit.component.css']
})
export class BlogappWebdevEditComponent implements OnInit {

  id!: number;
  postSlug: string;
  editMode = false;
  editedPost: WebdevPostModel;
  webBlogForm: FormGroup;
  loggedinUserId: number;
  constructor(
    private route: ActivatedRoute,
    private wdService: WebdevService,
    private dsService: DataStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.get_params();
    setTimeout( () => { this.initForm() }, 1000 );
  }

  private get_params() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.loggedinUserId = JSON.parse(localStorage.getItem("userid"))
      if (this.editMode) {
        this.postSlug = this.wdService.getWebdevPost(this.id)["slug"];
        this.dsService.fetchWebdevPostbyID(this.postSlug).subscribe((data: WebdevPostModel) => {
          if (this.loggedinUserId == data.owner){
            this.editedPost = data;
          } else {
            this.editedPost = null;
            this.router.navigate(["/web"]);
            window.alert("You do not have permissions!")
          }
          }
        )
      }
    });
  }

  private initForm() {
    let blogTitle = '';
    let blogDescription = '';
    let blogContent = '';
    let blogLikedIt: number[] = [];
    let blogOwner = JSON.parse(localStorage.getItem("userid")) || null;

    if (this.editMode) {
      blogTitle = this.editedPost.title;
      blogDescription = this.editedPost.description;
      blogContent = this.editedPost.content;
      if (this.editedPost['liked_by']) {
        for (let arryElem of this.editedPost.liked_by) {
          blogLikedIt.push(arryElem)
        }        
      }
    }

    this.webBlogForm = new FormGroup({
      title: new FormControl(blogTitle, Validators.required),
      description: new FormControl(blogDescription, Validators.required),
      content: new FormControl(blogContent, Validators.required),
      liked_by: new FormControl(blogLikedIt),
      owner: new FormControl(blogOwner)
    });
  }
  

  

  onSubmit() {
    if (this.editMode) {
      this.wdService.updateWebdevPost(this.postSlug, this.webBlogForm.value);
      console.log(this.webBlogForm);

    } else {
      this.wdService.addWebdevPost(this.webBlogForm.value);
      console.log("Added Post");
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['web/']);
  }
}
