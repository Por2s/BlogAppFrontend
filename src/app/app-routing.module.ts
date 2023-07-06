import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {BlogListComponent} from "./components/blog-list/blog-list.component";
import {RegisterComponent} from "./components/register/register.component";
import {BlogPostComponent} from "./components/blog-post/blog-post.component";
import {CreateEditBlogPostComponent} from "./components/create-edit-blog-post/create-edit-blog-post.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'blogList',
    component: BlogListComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'blogPost',
    component: BlogPostComponent
  },
  {
    path: 'create',
    component: CreateEditBlogPostComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
