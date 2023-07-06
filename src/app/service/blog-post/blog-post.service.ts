import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogPost} from "../../model/blog.post";
import {BlogComment} from "../../model/blog.comment";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  private readonly blogsUrl: string;

  constructor(private http: HttpClient) {
    this.blogsUrl = 'http://localhost:8080/blogs';
  }

  public getAll(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogsUrl);
  }

  public getById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.blogsUrl + '/' + id);
  }

  public saveOrUpdate(blogPost: BlogPost): Observable<boolean> {
    return this.http.post<boolean>(this.blogsUrl + '/create', blogPost);
  }

  public deleteById(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.blogsUrl + '/delete/' + id);
  }

  public getComments(blogId: number): Observable<BlogComment[]> {
    return this.http.get<BlogComment[]>(this.blogsUrl + '/comments/' + blogId);
  }

  public postComment(comment: BlogComment): Observable<boolean> {
    return this.http.post<boolean>(this.blogsUrl + '/comments', comment);
  }
}
