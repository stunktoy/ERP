import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BillOfMaterialRecordComponent } from 'src/app/pages/inventory/bill-of-material/bill-of-material-record/bill-of-material-record.component';
import { BillOfMaterialRoutingModule } from 'src/app/routings/inventory/bill-of-material-routing.module';
import { DataTableModule } from 'src/app/shared/datatable.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      BillOfMaterialRecordComponent,
    ],
    imports: [
      BillOfMaterialRoutingModule,
      DataTableModule,
      SharedModule,
      FormsModule
    ],
    providers:[
      
    ]
  })

export class BillOfMaterialRecordModule {}
  