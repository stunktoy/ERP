import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { customer } from '../../models/sales/customer';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    private _url: string = environment.baseUrl;

    constructor(private _http:HttpClient) {}

    /** Returns paginated data from http header and set of data. */
    getPaginated(httpParam?:any): Observable<HttpResponse<customer>> {
        return this._http.get<customer>(this._url + 'sales/customer', {params: httpParam, observe: 'response'});
    }

    post(httpParam:any) {
        return this._http.post(this._url + 'sales/customer', httpParam).pipe();
    }


}