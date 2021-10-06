import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-main-navigator',
  templateUrl: './main-navigator.component.html',
  styleUrls: ['./main-navigator.component.scss']
})
export class MainNavigatorComponent {
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _routeChangeService: RouteChangeService) { }
}
