import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemTypeMaintenanceComponent } from 'src/app/pages/inventory/item-type/item-type-maintenance/item-type-maintenance.component';
import { ItemTypeRecordComponent } from 'src/app/pages/inventory/item-type/item-type-record/item-type-record.component';

const routes: Routes = [
  {
    path: 'item-type/maintenance', 
    component: ItemTypeMaintenanceComponent
  },
  {
    path: 'item-type/record', 
    component: ItemTypeRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ItemTypeRoutingModule { }

