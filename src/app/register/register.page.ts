import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  registerForm: FormGroup
  validation_message = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Enter a valid email." }
    ],
    name: [
      { type: "required", message: "name is required." },
      { type: "minlength", message: "name must be at least 2 characters." }
    ],
    last_name: [
      { type: "required", message: "last name is required." },
      { type: "minlength", message: "last name must be at least 2 characters." }
    ],
    password: [
      { type: "required", message: "Password is required." },
      { type: "minlength", message: "Password must be at least 6 characters." }
    ],
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) { 
    this.registerForm = this.formBuilder.group({
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
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      )
    })
  }

  goToLogin() {
    this.navCtrl.navigateBack("/login")
  }

  register(registerData: any) {
    console.log(registerData);
    this.authService.registerUser(registerData).then(res => {
      this.navCtrl.navigateBack("/login")
    })
  }

}
