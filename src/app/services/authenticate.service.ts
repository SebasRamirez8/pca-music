import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (credentials.email === "sebasr8@gmail.com" && credentials.password === "12345678") {
        accept("Login Correcto");
      } else {
        reject("Login Incorrecto");
      }
    })
  }
}
