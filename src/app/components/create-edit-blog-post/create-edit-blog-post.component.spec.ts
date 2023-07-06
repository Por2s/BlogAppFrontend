import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBlogPostComponent } from './create-edit-blog-post.component';

describe('CreateEditBlogPostComponent', () => {
  let component: CreateEditBlogPostComponent;
  let fixture: ComponentFixture<CreateEditBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditBlogPostComponent]
    });
    fixture = TestBed.createComponent(CreateEditBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
