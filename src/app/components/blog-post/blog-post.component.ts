import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPost} from "../../model/blog.post";
import {BlogPostService} from "../../service/blog-post/blog-post.service";
import {BlogComment} from "../../model/blog.comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  public blogPost?: BlogPost;
  public blogComments: BlogComment[] = [];
  public currentUser: boolean = false;
  public commenting: boolean = false;
  public commentForm: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private blogPostService: BlogPostService) {
    this.commentForm = new FormGroup({
      commentText: new FormControl('', [Validators.required])
    });
  }



  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
          this.blogPostService.getById(params['index']).subscribe(
            post => {
              this.blogPost = post;
              this.currentUser = this.blogPost.username === localStorage.getItem('loggedInUser');
            });
          this.blogPostService.getComments(params['index']).subscribe(
            commentsList => this.blogComments = commentsList
          );
        }
      );
  }

  public editPost(): void {
    this.router.navigate(['/create'], {queryParams: {index: this.blogPost?.id}})
  }

  public deletePost(): void {
    if (this.blogPost){
      this.blogPostService.deleteById(this.blogPost.id).subscribe(
        () => this.router.navigate(['blogList']));
    }
  }

  public submitComment(): void {
    const username: string | null = localStorage.getItem('loggedInUser');
    if (username === null){
      return;
    }
    if (this.blogPost){
      let comment = new BlogComment(this.commentForm.value.commentText, '', '', username, this.blogPost?.id, -1)
      this.blogPostService.postComment(comment).subscribe(() => window.location.reload());
    }

  }

}
