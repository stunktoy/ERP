import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMaintenanceComponent } from 'src/app/pages/sales/customer/customer-maintenance/customer-maintenance.component';
import { CustomerRecordComponent } from 'src/app/pages/sales/customer/customer-record/customer-record.component';



const routes: Routes = [
  {
    path: 'customer/maintenance', 
    component: CustomerMaintenanceComponent
  },
  {
    path: 'customer/record', 
    component: CustomerRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CustomerRoutingModule { }

