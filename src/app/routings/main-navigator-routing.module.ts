import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigatorComponent } from '../layout/main-navigator/main-navigator.component';
import { MainGuard } from '../guards/main.guard';

const routes: Routes = [
  {
    path: '', 
    //canActivate: [MainGuard],
    component: MainNavigatorComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('src/app/modules/sales/customer/customer-maintenance.module').then(m => m.CustomerMaintenanceModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/sales/customer/customer-record.module').then(m => m.CustomerRecordModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/inventory/bill-of-material/bill-of-material-maitenance.module').then(m => m.BillOfMaterialMaintenanceModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/inventory/bill-of-material/bill-of-material-record.module').then(m => m.BillOfMaterialRecordModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/inventory/item-type/item-type-maintenance.module').then(m => m.ItemTypeMaintenanceModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/inventory/item-type/item-type-record.module').then(m => m.ItemTypeRecordModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/inventory/classification/classification-maintenance.module').then(m => m.ClassificationMaintenanceModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/inventory/classification/classification-record.module').then(m => m.ClassificationRecordModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/sales/customer-order/customer-order-maintenance.module').then(m => m.CustomerOrderMaintenanceModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/sales/customer-order/customer-order-record.module').then(m => m.CustomerOrderRecordModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MainNavigatorRoutingModule { }

