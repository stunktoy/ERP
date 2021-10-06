import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillOfMaterialMaitenanceComponent } from 'src/app/pages/inventory/bill-of-material/bill-of-material-maitenance/bill-of-material-maitenance.component';
import { BillOfMaterialRecordComponent } from 'src/app/pages/inventory/bill-of-material/bill-of-material-record/bill-of-material-record.component';

const routes: Routes = [
  {
    path: 'bill-of-material/maintenance', 
    component: BillOfMaterialMaitenanceComponent
  },
  {
    path: 'bill-of-material/record', 
    component: BillOfMaterialRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class BillOfMaterialRoutingModule { }

