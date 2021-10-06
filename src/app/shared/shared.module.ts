import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ProgressBarConfirmModule } from '../modules/progressbar-confirm.module';

@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    exports: [
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CommonModule
    ],
    providers:[
    ]
  })

export class SharedModule {}