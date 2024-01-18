import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  loaderDisplay: boolean = false;
  loginClicked: boolean = false;
  username: any;
  password: any;
  errorMessage: any;
  showPassword: boolean = false;
  // requestClicked: boolean = false;
  recipientEmail: any;
  // subject: string = 'Log in request';
  // to: string = 'recipient@example.com'; 
  // body: string = `Thank you for coming. Please enter following details for registration purpose%0D%0A%0D%0AFirstName: %0D%0ALast Name: %0D%0AEmail: %0D%0AUsername: %0D%0APassword: %0D%0A`;
  // mailtoLink = ""

  mailText: string = '';
  connectUsClicked: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,) { }

  ngOnInit(): void {
    this.userService.isUserLoggedIn$.next(false);
    // if (this.activatedRoute.snapshot.routeConfig?.path == "request-demo") {
    //   this.requestClicked = true;
    //   this.loginClicked = false;
    // }
    // else
    // this.requestClicked = false;
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(^.{8,16}$)/)]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  login() {
    this.loginClicked = !this.loginClicked;
  }

  userLogin() {
    if (this.form.valid) {
      let userData: UserLoginRequest = {} as UserLoginRequest;
      userData.username = this.form.controls["username"].value!.toString();
      userData.password = this.form.controls["password"].value!.toString();

      this.loaderDisplay = true;
      this.userService.checkUserLogin(userData).subscribe({
        next: (res) => {
          if (res && res.user_id > 0) {
            this.loaderDisplay = false;
            this.userService.isUserLoggedIn$.next(true);
            this.userService.userLoginData = res;
            this.router.navigate(['/platform']);
          }
        },
        error: (err) => {
          this.loaderDisplay = false;
          alert(err.error.message);
        }
      })
    } else {
      alert("Enter values for all fields");
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  nameChanged() {
    // this.form.controls['name'].markAsTouched();
    let nameText = this.form.controls['username'].value;
    if (nameText?.includes('@')) {
      this.form.controls['username'].addValidators(Validators.email);
    } else {
      this.form.controls['username'].clearValidators();
      this.form.controls['username'].setValidators(Validators.required);
    }
    this.form.controls['username'].updateValueAndValidity();
  }

  forgotPassword() {
    if (this.form.controls["username"].valid) {
      let userData = { email: this.form.controls["username"].value?.toString() }

      this.userService.forgotPassword(userData).subscribe({
        next: (res) => {
          console.log('forgot', res);
          alert(res.detail);
        },
        error: (err) => {
          alert(err.error.detail);
        }
      });
    } else {
      alert("Please enter register Email");
    }
  }

}