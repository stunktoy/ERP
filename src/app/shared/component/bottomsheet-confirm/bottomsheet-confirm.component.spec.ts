import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetConfirmComponent } from './bottomsheet-confirm.component';

describe('BottomsheetConfirmComponent', () => {
  let component: BottomsheetConfirmComponent;
  let fixture: ComponentFixture<BottomsheetConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsheetConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
