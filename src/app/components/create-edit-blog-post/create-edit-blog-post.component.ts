import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogPostService} from "../../service/blog-post/blog-post.service";
import {BlogPost} from "../../model/blog.post";


@Component({
  selector: 'app-create-edit-blog-post',
  templateUrl: './create-edit-blog-post.component.html',
  styleUrls: ['./create-edit-blog-post.component.scss']
})
export class CreateEditBlogPostComponent implements OnInit{

  public blogForm: FormGroup;
  public blogId: number = -1;
  public timeCreated: string = '';

  constructor(private router: Router,
              private blogPostService: BlogPostService,
              private activatedRoute: ActivatedRoute) {
    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params['index']) {
          this.blogId = params['index'];
          this.blogPostService.getById(params['index']).subscribe(post => {
              this.blogForm.setValue({title: post.title, text: post.text});
              this.timeCreated = post.timeCreated;
            }
          );
        }
      });
  }

  public submitBlogPost(): void {
    const username: string | null = localStorage.getItem('loggedInUser');
    if (username === null){
      return;
    }
    this.blogPostService.saveOrUpdate(
      new BlogPost(this.blogForm.value.title, this.blogForm.value.text, username, this.timeCreated, '',  this.blogId)).subscribe(
        () => this.router.navigate(['blogList'])
    );
}



}
