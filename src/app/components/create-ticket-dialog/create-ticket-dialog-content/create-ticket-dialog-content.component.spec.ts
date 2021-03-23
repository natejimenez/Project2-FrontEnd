import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTicketDialogContentComponent } from './create-ticket-dialog-content.component';

describe('CreateTicketDialogContentComponent', () => {
  let component: CreateTicketDialogContentComponent;
  let fixture: ComponentFixture<CreateTicketDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTicketDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTicketDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
