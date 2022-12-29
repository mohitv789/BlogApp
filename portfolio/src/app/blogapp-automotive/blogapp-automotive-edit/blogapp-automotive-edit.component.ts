import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { AutomotiveService } from '../automotive.service';
import { AutomotivePostModel } from '../automotive_post.model';

@Component({
  selector: 'app-blogapp-automotive-edit',
  templateUrl: './blogapp-automotive-edit.component.html',
  styleUrls: ['./blogapp-automotive-edit.component.css']
})
export class BlogappAutomotiveEditComponent implements OnInit {
  id!: number;
  postSlug: string;
  editMode = false;
  editedPost: AutomotivePostModel;
  autoBlogForm: FormGroup;
  loggedinUserId: number;
  constructor(
    private route: ActivatedRoute,
    private amService: AutomotiveService,
    private dsService: DataStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.get_params();
    setTimeout( () => { this.initForm() }, 500 );
  }
  get controls() {
    return (this.autoBlogForm.controls['sections'] as FormArray).controls;
  }

  private get_params() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.loggedinUserId = JSON.parse(localStorage.getItem("userid"))
      if (this.editMode) {
        this.postSlug = this.amService.getAutomotivePost(this.id)["slug"];
        this.dsService.fetchAutomotivePostbyID(this.postSlug).subscribe((data: AutomotivePostModel) => {
          if (this.loggedinUserId == data.owner){
            this.editedPost = data;
          } else {
            this.editedPost = null;
            this.router.navigate(["/auto"]);
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
    let blogPoster = '';
    let blogSections = new FormArray<FormGroup>([]);
    let blogOwner = JSON.parse(localStorage.getItem("userid")) || null;

    if (this.editMode) {
      blogTitle = this.editedPost.title;
      blogDescription = this.editedPost.description;
      blogPoster = this.editedPost.poster;
      if (this.editedPost['sections']) {
        for (let section of this.editedPost.sections) {
          blogSections.push(
              new FormGroup({
                title: new FormControl(section.title, Validators.required),
                description: new FormControl(section.description, Validators.required),
                problem: new FormControl(section.problem, Validators.required),
                solution: new FormControl(section.solution, Validators.required),
                ref_image: new FormControl(section.ref_image, Validators.required),
                owner: new FormControl(blogOwner)
            })
        )}
      }
    }

    this.autoBlogForm = new FormGroup({
      title: new FormControl(blogTitle, Validators.required),
      description: new FormControl(blogDescription, Validators.required),
      poster: new FormControl(blogPoster, Validators.required),
      sections: blogSections,
      owner: new FormControl(blogOwner)
    });
  }
  onAddSection() {
    let blogOwner = JSON.parse(localStorage.getItem("userid"));
    (<FormArray>this.autoBlogForm.get('sections')).push(
      this.fb.group({
        title: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        problem: new FormControl('', Validators.required),
        solution: new FormControl('', Validators.required),
        ref_image: new FormControl('', Validators.required),
        owner: blogOwner
      })
    );
  }

  onDeleteSection(index: number) {
    (<FormArray>this.autoBlogForm.get('sections')).removeAt(index);
  }

  onSubmit() {
    if (this.editMode) {
      this.amService.updateAutoPost(this.postSlug, this.autoBlogForm.value);
    } else {
      this.amService.addAutoPost(this.autoBlogForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['auto/']);
  }
}
