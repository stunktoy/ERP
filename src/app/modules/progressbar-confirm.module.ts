import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarConfirmComponent } from '../shared/component/progressbar-confirm/progressbar-confirm.component';
import { SharedModule } from '../shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
export { ProgressBarConfirmComponent } from '../shared/component/progressbar-confirm/progressbar-confirm.component';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      OverlayModule
    ],
    declarations: [
      ProgressBarConfirmComponent
    ],
    exports: [
      ProgressBarConfirmComponent
    ]
})
export class ProgressBarConfirmModule { }