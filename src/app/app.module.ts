import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { CreateEditBlogPostComponent } from './components/create-edit-blog-post/create-edit-blog-post.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LoginComponent,
    BlogListComponent,
    RegisterComponent,
    BlogPostComponent,
    CreateEditBlogPostComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
