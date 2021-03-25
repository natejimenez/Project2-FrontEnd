import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTicketDetailsTableComponent } from './tech-ticket-details-table.component';

describe('TechTicketDetailsTableComponent', () => {
  let component: TechTicketDetailsTableComponent;
  let fixture: ComponentFixture<TechTicketDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTicketDetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTicketDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
