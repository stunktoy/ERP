import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { billofmaterial } from 'src/app/models/inventory/bill-of-material';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BillOfMaterialService {

    private _url: string = environment.baseUrl;

    constructor(private _http:HttpClient) {}

    /** Bill Of Material Record: Returns a set of data from database bill of material table*/
    getPaginated(httpParam?:any): Observable<HttpResponse<billofmaterial>> {
        return this._http.get<billofmaterial>(this._url + 'inventory/billofmaterial', {params: httpParam, observe: 'response'});
    }

    /** Bill Of Material Maintenance: Insertion of data to the database*/
    post(httpParam:any) {
        return this._http.post(this._url + 'inventory/billofmaterial', httpParam).pipe();
    }


}