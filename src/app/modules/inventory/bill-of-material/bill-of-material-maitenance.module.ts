import { NgModule } from '@angular/core';
import { BillOfMaterialMaitenanceComponent } from 'src/app/pages/inventory/bill-of-material/bill-of-material-maitenance/bill-of-material-maitenance.component';
import { BillOfMaterialRoutingModule } from 'src/app/routings/inventory/bill-of-material-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarConfirmModule } from 'src/app/modules/progressbar-confirm.module';

@NgModule({
    declarations: [
      BillOfMaterialMaitenanceComponent,
    ],
    imports: [
      BillOfMaterialRoutingModule,
      SharedModule,
      ProgressBarConfirmModule
    ]
  })

export class BillOfMaterialMaintenanceModule {}
  