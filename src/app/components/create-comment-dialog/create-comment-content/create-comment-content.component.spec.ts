import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentContentComponent } from './create-comment-content.component';

describe('CreateCommentContentComponent', () => {
  let component: CreateCommentContentComponent;
  let fixture: ComponentFixture<CreateCommentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommentContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
