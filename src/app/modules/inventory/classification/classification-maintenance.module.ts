import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarConfirmModule } from 'src/app/modules/progressbar-confirm.module';
import { ClassificationMaintenanceComponent } from 'src/app/pages/inventory/classification/classification-maintenance/classification-maintenance.component';
import { ClassificationRoutingModule } from 'src/app/routings/inventory/classification-routing.module';

@NgModule({
    declarations: [
      ClassificationMaintenanceComponent,
    ],
    imports: [
      ClassificationRoutingModule,
      SharedModule,
      ProgressBarConfirmModule
    ]
  })

export class ClassificationMaintenanceModule {}
  