import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMaintenanceComponent } from './customer-maintenance.component';

describe('CustomerMaintenanceComponent', () => {
  let component: CustomerMaintenanceComponent;
  let fixture: ComponentFixture<CustomerMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
