import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemTypeRecordComponent } from 'src/app/pages/inventory/item-type/item-type-record/item-type-record.component';
import { ItemTypeRoutingModule } from 'src/app/routings/inventory/item-type-routing.module';
import { DataTableModule } from 'src/app/shared/datatable.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      ItemTypeRecordComponent,
    ],
    imports: [
      ItemTypeRoutingModule,
      DataTableModule,
      SharedModule,
      FormsModule
    ],
    providers:[
      
    ]
  })

export class ItemTypeRecordModule {}
  