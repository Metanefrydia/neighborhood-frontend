import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor (public configService: ConfigService, private _snackBar: MatSnackBar) {}

  signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    userType: new FormControl('', [Validators.required]),
  });

  public userTypes = [{id: 0, name: 'Firmowy'}, {id: 1, name: 'Prywatny'}];

  ngOnInit(): void {}

  public onSubmit() {
    console.log(this.signupForm.value);

  //   var accountDetails = {
  //   email: this.signupForm.controls['emailFormControl'].value, 
  //   userName: this.signupForm.controls['usernameFormControl'].value, 
  //   password: this.signupForm.controls['passwordFormControl'].value,
  //   phoneNumber: this.signupForm.controls['numberFormControl'].value, 
  //   type: this.signupForm.controls['userTypeFormControl'].value
  // };

    let formObj = this.signupForm.getRawValue();

//    let serializedForm = JSON.stringify(formObj);

    let serializedForm = JSON.stringify(formObj);

    this.configService.postAccountDetails(serializedForm);
    this.openSnackBar();
    this.signupForm.setErrors({ 'invalid': true });
  }

  public openSnackBar() {
    this._snackBar.open('Twoje konto zostało utworzone! Możesz się zalogować.', '' , {
      duration: 5000,
    });
  }

}
