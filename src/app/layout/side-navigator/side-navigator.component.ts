import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavService } from 'src/app/services/sidenav.service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-side-navigator',
  templateUrl: './side-navigator.component.html',
  styleUrls: ['./side-navigator.component.scss']
})
export class SideNavigatorComponent implements OnInit {

  navLists:any;

  sideNavLists:any[];

  constructor(private _sideNavService: SideNavService) { }

  ngOnInit(): void {
    this._sideNavService.getModules().pipe(      
      map((result) => { 
        this.navLists = result.body!;

        this.sideNavLists = this.navLists.filter((a: any) => a.statusCode == 1);
      }),
      catchError(error => throwError(error))
    ).subscribe();    
  }
}
