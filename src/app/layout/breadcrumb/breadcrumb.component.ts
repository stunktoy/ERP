import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  
  routeChangeData: any;

  constructor(private _routeChangeService: RouteChangeService, private _activatedRoute: ActivatedRoute) { 
    this._routeChangeService.data$.subscribe(res => {
      this.routeChangeData = res
    }); 
    console.log()
 }

  ngOnInit(): void {

  }
}
