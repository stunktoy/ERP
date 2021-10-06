import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerRecordComponent } from 'src/app/pages/sales/customer/customer-record/customer-record.component';
import { CustomerRoutingModule } from 'src/app/routings/sales/customer-routing.module';
import { DataTableModule } from 'src/app/shared/datatable.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      CustomerRecordComponent
    ],
    imports: [
      CustomerRoutingModule,
      SharedModule,
      FormsModule,
      DataTableModule
    ]
  })

export class CustomerRecordModule {}
  