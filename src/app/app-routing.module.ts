import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  
  {
    path: 'login',
    loadChildren: () => import('./modules/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/login.module').then(m => m.LoginModule),
  },
 
  {
    path: 'main',
    loadChildren: () => import('./modules/main-navigator.module').then(m => m.MainNavigatorModule)    
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

