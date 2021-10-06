import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfMaterialRecordComponent } from './bill-of-material-record.component';

describe('BillOfMaterialRecordComponent', () => {
  let component: BillOfMaterialRecordComponent;
  let fixture: ComponentFixture<BillOfMaterialRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfMaterialRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfMaterialRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
