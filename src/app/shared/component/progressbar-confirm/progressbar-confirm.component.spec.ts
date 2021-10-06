import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarConfirmComponent } from './progressbar-confirm.component';

describe('ProgressbarConfirmComponent', () => {
  let component: ProgressBarConfirmComponent;
  let fixture: ComponentFixture<ProgressBarConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
