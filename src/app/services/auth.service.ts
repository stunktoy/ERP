import { Injectable } from "@angular/core";
import { NgxEncryptCookieService } from "ngx-encrypt-cookie";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private _cookie: NgxEncryptCookieService) {}

    /*Function that will return true or false whether the user has a truthy or falsify cookie value */ 
    userHasCookie():boolean {
        return !!this._cookie.get("c_person", true, "SimpliCTKeyErp"); 
    }
}