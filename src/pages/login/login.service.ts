import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http : HttpClient) { }

  mobileNoValidate(mobileNo) {
    return this.http.get('https://api.github.com/users');
  }

  otpValidation(mobileNo, otp){
    return this.http.get('https://api.github.com/users');
  }
}