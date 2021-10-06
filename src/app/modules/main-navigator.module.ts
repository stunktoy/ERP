import { NgModule } from '@angular/core';
import { MainNavigatorComponent } from '../layout/main-navigator/main-navigator.component';
import { MainNavigatorRoutingModule } from '../routings/main-navigator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TopNavigatorComponent } from '../layout/top-navigator/top-navigator.component';
import { SideNavigatorComponent } from '../layout/side-navigator/side-navigator.component';
import { AuthGuard } from '../guards/auth.guard';
import { BreadcrumbComponent } from '../layout/breadcrumb/breadcrumb.component';
import { BottomSheetConfirmComponent } from '../shared/component/bottomsheet-confirm/bottomsheet-confirm.component';
import { OverlayService } from '../services/overlay.service';
import { CustomerService } from '../services/sales/customer.service';
import { DataTableService } from '../shared/datatable.service';
import { SideNavService } from '../services/sidenav.service';

@NgModule({
    declarations: [
      MainNavigatorComponent,
      TopNavigatorComponent,
      SideNavigatorComponent,
      BreadcrumbComponent,
      BottomSheetConfirmComponent
    ],
    imports: [
      MainNavigatorRoutingModule,
      SharedModule,
      CommonModule,
    ],
    providers: [
      AuthGuard,
      OverlayService,
      CustomerService,
      DataTableService,
      SideNavService,
    ]
  })

export class MainNavigatorModule {}
  