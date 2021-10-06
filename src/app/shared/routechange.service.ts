import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class RouteChangeService {

  private data = new BehaviorSubject({
      parentLink: "",
      activeLink: "",
    });

  data$ = this.data.asObservable();

  changeMainTitle(data: any) {
    this.data.next(data)
  }
}