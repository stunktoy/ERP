import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';
import { style, animate, transition, trigger } from '@angular/animations';
import { NgxEncryptCookieService } from 'ngx-encrypt-cookie/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(0, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  notExist: boolean = false;

  constructor(private _loginService: LoginService, private _router: Router, private _cookie: NgxEncryptCookieService) {  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.valid) {
      this._cookie.deleteAll();

    this.notExist = false;

    document.body.style.cursor = 'wait';

    this._loginService.userLogin(this.loginForm.value).toPromise().then(res => {

      document.body.style.cursor = 'default';

      if (res.forceChangePassword == true) {

        this.notExist = false;

      }
      else if (res.loginId != 0) {

        /*Setting a cookie for user session that will be used for authentication*/
        const cookieDateExpire = new Date();
        cookieDateExpire.setDate(cookieDateExpire.getDate() + 7)
        this._cookie.set("c_person", res.personId, true, "SimpliCTKeyErp", cookieDateExpire);
        this._cookie.set("i_user", res.userName, true, "SimpliCTKeyErp", cookieDateExpire);
        this._router.navigate(['main'], { skipLocationChange:true });
        this.notExist = false;
      }
      else {
        this.notExist = true;
      }
    },
      error => {
        console.log(error);
        document.body.style.cursor = 'default';
      });
    }
  }
}
