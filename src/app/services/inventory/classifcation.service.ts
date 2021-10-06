import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { classification } from 'src/app/models/inventory/classification';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ClassificationService {

    private _url: string = environment.baseUrl;

    constructor(private _http:HttpClient) {}

    get(httpParam?:any): Observable<classification> {
        return this._http.get<classification>(this._url + 'inventory/classification', {params: httpParam});
    }

    /** Returns paginated data from http header and set of data. */
    getPaginated(httpParam?:any): Observable<HttpResponse<classification>> {
        return this._http.get<classification>(this._url + 'inventory/classification', {params: httpParam, observe: 'response'});
    }

    post(httpParam:any) {
        return this._http.post(this._url + 'inventory/classification', httpParam).pipe();
    }


}