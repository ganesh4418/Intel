import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationExp } from 'src/app/shared/validation';

@Component({
  selector: 'app-connect-us',
  templateUrl: './connect-us.component.html',
  styleUrls: ['./connect-us.component.css']
})
export class ConnectUsComponent {
  emailPatternMsg: string = "Email accepts small case letters, capital case letters, numbers and atleast one letter in the word before @";
  showModal = false;
  modalBody: string = "";
  modalTitle: string = "";

  form = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    firstName: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.nameValidation)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.nameValidation)]),
    // company: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(ValidationExp.companyValidation)]),
    email: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.emailValidation)]),
    userName: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.emailValidation)]),
    number: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.numberValidation)]),
  });

  shareDetail() {
    if (this.form.valid) {
      console.log(this.form.value);
      // alert('request sent');
      this.form.reset();
      this.showModal = true;
      this.modalBody = "Thank you for your request, We will review it shortly.";
      this.modalTitle = "Connect Us";

    //   let requestDemoData: RequestDemo = {} as RequestDemo;

    //   requestDemoData = {
    //     Full_name: this.form.controls["name"].value!.toString(),
    //     Company: this.form.controls["company"].value!.toString(),
    //     Business_email: this.form.controls["email"].value!.toString(),
    //     Contact_number: this.form.controls["number"].value!.toString()
    //   }

    //   this.service.requestDemo(requestDemoData).subscribe(res => {
    //     console.log('res', res);
    //     // this.successPopupVisible=true;
    //     alert('request sent');
    //     this.form.reset();
    //   });
    }
  }
  get f() {
    return this.form.controls;
  }
  checkOnlyNumbers(num: any) {
    const charCode = num.which ? num.which : num.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  closeModal() {
    this.showModal = false;
  }
}
