import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeRecordComponent } from './item-type-record.component';

describe('ItemTypeRecordComponent', () => {
  let component: ItemTypeRecordComponent;
  let fixture: ComponentFixture<ItemTypeRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypeRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
