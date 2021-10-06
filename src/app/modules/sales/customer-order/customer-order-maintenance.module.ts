import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarConfirmModule } from 'src/app/modules/progressbar-confirm.module';
import { CustomerOrderMaintenanceComponent } from 'src/app/pages/sales/customer-order/customer-order-maintenance/customer-order-maintenance.component';
import { CustomerOrderRoutingModule } from 'src/app/routings/sales/customer-order-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      CustomerOrderMaintenanceComponent
    ],
    imports: [
        CustomerOrderRoutingModule,
        SharedModule,
        ProgressBarConfirmModule,
        FormsModule
    ]
  })

export class CustomerOrderMaintenanceModule {}
  