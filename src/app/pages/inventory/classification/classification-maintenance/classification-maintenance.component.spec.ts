import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationMaintenanceComponent } from './classification-maintenance.component';

describe('ClassificationMaintenanceComponent', () => {
  let component: ClassificationMaintenanceComponent;
  let fixture: ComponentFixture<ClassificationMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
