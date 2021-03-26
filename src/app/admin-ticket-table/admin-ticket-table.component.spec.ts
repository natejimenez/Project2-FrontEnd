import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketTableComponent } from './admin-ticket-table.component';

describe('AdminTicketTableComponent', () => {
  let component: AdminTicketTableComponent;
  let fixture: ComponentFixture<AdminTicketTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
