import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrderMaintenanceComponent } from 'src/app/pages/sales/customer-order/customer-order-maintenance/customer-order-maintenance.component';
import { CustomerOrderRecordComponent } from 'src/app/pages/sales/customer-order/customer-order-record/customer-order-record.component';



const routes: Routes = [
  {
    path: 'customer-order/maintenance', 
    component: CustomerOrderMaintenanceComponent
  },
  {
    path: 'customer-order/record', 
    component: CustomerOrderRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CustomerOrderRoutingModule { }

