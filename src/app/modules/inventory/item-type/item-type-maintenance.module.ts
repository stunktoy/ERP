import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarConfirmModule } from 'src/app/modules/progressbar-confirm.module';
import { ItemTypeMaintenanceComponent } from 'src/app/pages/inventory/item-type/item-type-maintenance/item-type-maintenance.component';
import { ItemTypeRoutingModule } from 'src/app/routings/inventory/item-type-routing.module';

@NgModule({
    declarations: [
      ItemTypeMaintenanceComponent,
    ],
    imports: [
      ItemTypeRoutingModule,
      SharedModule,
      ProgressBarConfirmModule
    ]
  })

export class ItemTypeMaintenanceModule {}
  