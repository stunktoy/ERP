import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationRecordComponent } from './classification-record.component';

describe('ClassificationRecordComponent', () => {
  let component: ClassificationRecordComponent;
  let fixture: ComponentFixture<ClassificationRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
