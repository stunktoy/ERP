import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarLoaderComponent } from '../layout/bar-loader/bar-loader.component';
import { DataTableFilterComponent } from '../layout/data-table-filter/data-table-filter.component';
import { DataTableComponent } from '../layout/data-table/data-table.component';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [
      DataTableComponent,
      DataTableFilterComponent,
      BarLoaderComponent
    ],
    imports: [
        SharedModule,
        FormsModule
    ],
    exports:[
      DataTableComponent,
      DataTableFilterComponent,
      BarLoaderComponent
    ]
  })

export class DataTableModule {}
  