import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfMaterialMaitenanceComponent } from './bill-of-material-maitenance.component';

describe('BillOfMaterialMaitenanceComponent', () => {
  let component: BillOfMaterialMaitenanceComponent;
  let fixture: ComponentFixture<BillOfMaterialMaitenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfMaterialMaitenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfMaterialMaitenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
