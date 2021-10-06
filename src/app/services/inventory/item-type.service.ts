import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { itemtype } from 'src/app/models/inventory/item-type';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ItemTypeService {

    private _url: string = environment.baseUrl;

    constructor(private _http:HttpClient) {}

    /** Item Type Record: Returns a set of data from database item type table*/
    getPaginated(httpParam?:any): Observable<HttpResponse<itemtype>> {
        return this._http.get<itemtype>(this._url + 'inventory/itemtype', {params: httpParam, observe: 'response'});
    }

    /** Bill Of Material Maintenance: Insertion of data to the database*/
    post(httpParam:any) {
        return this._http.post(this._url + 'inventory/itemtype', httpParam).pipe();
    }


}