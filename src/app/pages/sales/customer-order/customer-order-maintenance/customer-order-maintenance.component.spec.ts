import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderMaintenanceComponent } from './customer-order-maintenance.component';

describe('CustomerOrderMaintenanceComponent', () => {
  let component: CustomerOrderMaintenanceComponent;
  let fixture: ComponentFixture<CustomerOrderMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
