import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentDialogComponent } from './create-comment-dialog.component';

describe('CreateCommentDialogComponent', () => {
  let component: CreateCommentDialogComponent;
  let fixture: ComponentFixture<CreateCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
