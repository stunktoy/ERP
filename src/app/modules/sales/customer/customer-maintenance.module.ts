import { NgModule } from '@angular/core';
import { ButtonHeaderComponent } from 'src/app/layout/button-header/button-header.component';
import { CustomerMaintenanceComponent } from 'src/app/pages/sales/customer/customer-maintenance/customer-maintenance.component';
import { CustomerRoutingModule } from 'src/app/routings/sales/customer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarConfirmModule } from 'src/app/modules/progressbar-confirm.module';

@NgModule({
    declarations: [
      CustomerMaintenanceComponent,
      ButtonHeaderComponent
    ],
    imports: [
        CustomerRoutingModule,
        SharedModule,
        ProgressBarConfirmModule
    ]
  })

export class CustomerMaintenanceModule {}
  