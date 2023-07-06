import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BlogPostService} from "../../service/blog-post/blog-post.service";
import {BlogPost} from "../../model/blog.post";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private router: Router, private blogPostService: BlogPostService) {
  }

  public blogList: BlogPost[] = [];

  public ngOnInit(): void {
    this.blogPostService.getAll().subscribe(list => this.blogList = list)
  }

  public redirectToBlog(blogPost: BlogPost): void {
    this.router.navigate(['/blogPost'], {queryParams: {index : blogPost.id}})
  }

  public redirectToCreateBlog(): void {
    this.router.navigate(['/create']);
  }

}
