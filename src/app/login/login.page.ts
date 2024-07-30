import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  loginForm: FormGroup;
  validation_message = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Enter a valid email." }
    ],
    password: [
      { type: "required", message: "Password is required." },
      { type: "minlength", message: "Password must be at least 6 characters." }
    ]
  }
  errorMessage: any;
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService, 
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9_.±]+.[a-zA-Z0-9_.±]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  loginUser(dataLogin: any) {
      // console.log(dataLogin)
      this.authService.loginUser(dataLogin).then(res => {
        this.errorMessage = "";
        this.storage.set('isUserLoggedIn', true);
        this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      this.presentAlert(this.errorMessage);
    });
  }

  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: 'Oops!!! hubo un error',
      message: mss,
      buttons: ['OK'],
    });

    await alert.present();
  }

  register() {
    this.router.navigateByUrl("/register");
  }
}
