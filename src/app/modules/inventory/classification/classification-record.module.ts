import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassificationRecordComponent } from 'src/app/pages/inventory/classification/classification-record/classification-record.component';
import { ClassificationRoutingModule } from 'src/app/routings/inventory/classification-routing.module';
import { DataTableModule } from 'src/app/shared/datatable.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      ClassificationRecordComponent,
    ],
    imports: [
      ClassificationRoutingModule,
      DataTableModule,
      SharedModule,
      FormsModule
    ],
    providers:[
      
    ]
  })

export class ClassificationRecordModule {}
  