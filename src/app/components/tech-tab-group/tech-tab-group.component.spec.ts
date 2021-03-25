import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTabGroupComponent } from './tech-tab-group.component';

describe('TechTabGroupComponent', () => {
  let component: TechTabGroupComponent;
  let fixture: ComponentFixture<TechTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTabGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
