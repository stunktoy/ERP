import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { login } from '../models/login';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private _url: string = environment.baseUrl;

    constructor(private _http:HttpClient) {}

    /** Login: Returns user credentials*/
    userLogin(httpParam:any) {
        return this._http.get<login>(this._url + 'interface/login', {params: httpParam});
    }
}