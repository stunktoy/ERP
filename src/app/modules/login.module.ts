import { NgModule } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import { LoginRoutingModule } from '../routings/login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
        LoginRoutingModule,
        SharedModule
    ]
  })

export class LoginModule {}
  