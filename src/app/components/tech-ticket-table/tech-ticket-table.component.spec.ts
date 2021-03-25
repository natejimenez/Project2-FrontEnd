import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTicketTableComponent } from './tech-ticket-table.component';

describe('TechTicketTableComponent', () => {
  let component: TechTicketTableComponent;
  let fixture: ComponentFixture<TechTicketTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTicketTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTicketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
