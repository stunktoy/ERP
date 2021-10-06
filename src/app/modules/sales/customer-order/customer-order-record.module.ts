import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerOrderRecordComponent } from 'src/app/pages/sales/customer-order/customer-order-record/customer-order-record.component';
import { CustomerOrderRoutingModule } from 'src/app/routings/sales/customer-order-routing.module';
import { DataTableModule } from 'src/app/shared/datatable.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        CustomerOrderRecordComponent
    ],
    imports: [
      CustomerOrderRoutingModule,
      SharedModule,
      FormsModule,
      DataTableModule
    ]
  })

export class CustomerOrderRecordModule {}
  