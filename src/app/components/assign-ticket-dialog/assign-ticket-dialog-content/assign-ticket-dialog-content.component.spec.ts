import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTicketDialogContentComponent } from './assign-ticket-dialog-content.component';

describe('AssignTicketDialogContentComponent', () => {
  let component: AssignTicketDialogContentComponent;
  let fixture: ComponentFixture<AssignTicketDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTicketDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTicketDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
