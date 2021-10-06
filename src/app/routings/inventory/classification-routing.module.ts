import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationMaintenanceComponent } from 'src/app/pages/inventory/classification/classification-maintenance/classification-maintenance.component';
import { ClassificationRecordComponent } from 'src/app/pages/inventory/classification/classification-record/classification-record.component';

const routes: Routes = [
  {
    path: 'classification/maintenance', 
    component: ClassificationMaintenanceComponent
  },
  {
    path: 'classification/record', 
    component: ClassificationRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ClassificationRoutingModule { }

