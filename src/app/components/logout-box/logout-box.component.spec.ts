import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutBoxComponent } from './logout-box.component';

describe('LogoutBoxComponent', () => {
  let component: LogoutBoxComponent;
  let fixture: ComponentFixture<LogoutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
