import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
          
@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  
  constructor(private _router: Router, private _authService: AuthService) { }
  
  canActivate() {
    if (!this._authService.userHasCookie()) {
       // this._router.navigate(['main'], { skipLocationChange:true });
        return true;
    } 
    else {
       // this._router.navigate(['login']);
        return false;
    }
  }
}
