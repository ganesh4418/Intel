import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RequestDemo } from 'src/app/models/user';
import { RequestService } from 'src/app/shared/api-serviceEndpoint/request.service';
import { CountryList, CountryModel } from 'src/app/shared/country';
import { ValidationExp } from 'src/app/shared/validation';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent {
  showMessage: boolean = false;
  message: string = '';
  modalBody: string = "";
  modalTitle: string = "";
  showModal: boolean = false;
  showLoader: boolean = false;
  countryList: CountryModel[] = [];
  countryListCopy: CountryModel[] = [];
  countryFlagCode: string = "ZA";
  countryDialCode: string = "+27"
  showCountryList: boolean = false;
  countryContactMaxLength: number = 12;

  @HostListener('document:click', ['$event'])
  clickout() {
    this.showCountryList = false;
  }

  ngOnInit() {
    this.countryList = CountryList.getCountryList();
    this.countryListCopy = JSON.parse(JSON.stringify(this.countryList));
    console.log('cn', this.countryList);
    this.selectedCountry(this.countryListCopy.find(c => c.code == this.countryFlagCode)!, false);
  }

  form = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    name: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.nameValidation)]),
    company: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(ValidationExp.companyValidation)]),
    email: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.emailValidation)]),
    number: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.numberValidation)]),
  });

  constructor(private service: RequestService) {

  }

  get f() {
    return this.form.controls;
  }

  RequestDemo() {
    if (this.form.valid) {
      let requestDemoData: RequestDemo = {} as RequestDemo;

      if (!this.form.get('email')!.value!.includes('beautosys.com')) {
        alert("Please enter corporate email address.");
        return;
      }

      requestDemoData = {
        Full_name: this.form.controls["name"].value!.toString(),
        Company: this.form.controls["company"].value!.toString(),
        Business_email: this.form.controls["email"].value!.toString(),
        Contact_number: this.form.controls["number"].value!.toString()
      };
      this.showLoader = true;

      this.service.requestDemo(requestDemoData).subscribe({
        next: () => {
          this.showModal = true;
          this.modalBody = "Thank you for your request, We will review it shortly.";
          this.modalTitle = "Request Demo";
          this.form.reset();
          this.showLoader = false;
        },
        error: (err) => {
          this.showLoader = false;
        }
      });
    }
  }

  checkOnlyNumbers(num: any) {
    const charCode = num.which ? num.which : num.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  validateEmailWithLetter(control: AbstractControl) {
    const email = control.value;
    if (!/^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)) {
      return { emailInvalid: true };
    }
    if (!/[A-Za-z]/.test(email)) {
      return { emailInvalid: true };
    }
    return null;
  }

  selectedCountry(country: CountryModel, displayCountryList: boolean = true) {
    this.countryFlagCode = country.code;
    this.countryDialCode = country.dial_code;
    this.countryContactMaxLength = country.maxLength!;
    if (displayCountryList)
      this.showCountryList = !this.showCountryList;

    this.form.patchValue({ number: '' });
    this.form.controls['number'].setValidators([Validators.required, Validators.pattern(`^((\\+91-?)|0)?[0-9]{${this.countryContactMaxLength}}$`)]);
    this.form.controls['number'].updateValueAndValidity();
    this.searchCountry({ value: "" });
  }

  displayCountryList() {
    this.showCountryList = !this.showCountryList;
  }

  searchCountry(eventTarget: any) {
    if (eventTarget.value != "") {
      if (isNaN(eventTarget.value))
        this.countryListCopy = JSON.parse(JSON.stringify(this.countryList.filter(c => c.name.toLowerCase().includes(eventTarget.value.toLowerCase()))));
      else
        this.countryListCopy = JSON.parse(JSON.stringify(this.countryList.filter(c => c.dial_code.includes(eventTarget.value))));
    } else
      this.countryListCopy = JSON.parse(JSON.stringify(this.countryList));
  }

  closeModal() {
    this.showModal = false;
  }
}
