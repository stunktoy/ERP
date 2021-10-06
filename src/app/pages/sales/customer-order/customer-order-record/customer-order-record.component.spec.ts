import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderRecordComponent } from './customer-order-record.component';

describe('CustomerOrderRecordComponent', () => {
  let component: CustomerOrderRecordComponent;
  let fixture: ComponentFixture<CustomerOrderRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
