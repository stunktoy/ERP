import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeMaintenanceComponent } from './item-type-maintenance.component';

describe('ItemTypeMaintenanceComponent', () => {
  let component: ItemTypeMaintenanceComponent;
  let fixture: ComponentFixture<ItemTypeMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypeMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
