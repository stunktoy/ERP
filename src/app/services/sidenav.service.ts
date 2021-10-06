import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { module } from '../models/module';

@Injectable({
    providedIn: 'root'
})

export class SideNavService {

    private _url: string = environment.baseUrl;

    constructor(private _http:HttpClient) {}

    /** Customer Record: Returns a set of data from database customer table*/
    getModules(httpParam?:any): Observable<HttpResponse<module>> {
        return this._http.get<module>(this._url + 'interface/module', {params: httpParam, observe: 'response'});
    }

}