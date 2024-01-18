import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUs } from 'src/app/models/user';
import { ContactUsService } from 'src/app/shared/api-serviceEndpoint/contact-us.service';
import { ValidationExp } from 'src/app/shared/validation';
import { CountryList, CountryModel } from 'src/app/shared/country';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {


  // fullNamePatternMsg: string = "Full Name should accept only upper case and lower case letters and first word should have 3 or more characters.";
  modalBody: string = "";
  modalTitle: string = "";
  showModal = false;
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

  constructor(private service: ContactUsService, private router: Router) {

  }

  ngOnInit() {
    this.countryList = CountryList.getCountryList();
    this.countryListCopy = JSON.parse(JSON.stringify(this.countryList));
    console.log('cn', this.countryList);
    this.selectedCountry(this.countryListCopy.find(c => c.code == this.countryFlagCode)!, false);

  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.nameValidation)]),
    company: new FormControl('', [Validators.required,Validators.pattern(ValidationExp.companyValidation)]),
    email: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.emailValidation)]),
    number: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.numberValidation)]),

  });

  get f() {
    return this.form.controls;
  }

  shareDetail() {
    console.log(this.form.value);

    let contactData: ContactUs = {} as ContactUs;
    if (!this.form.get('email')!.value!.includes('beautosys.com')) {
      alert("Please enter corporate email address.");
      return;
    }

    contactData = {
      Full_name: this.form.controls["name"].value!.toString(),
      Company: this.form.controls["company"].value!.toString(),
      Business_email: this.form.controls["email"].value!.toString(),
      Contact_number: this.form.controls["number"].value!.toString()
    }

    this.showLoader = true;

    this.service.contactUs(contactData).subscribe({
      next: () => {
        this.showModal = true;
        this.modalBody = "Thank you for sharing the details. We will get back to you soon!";
        // this.modalTitle = "Request Demo";
        this.form.reset();
        this.showLoader = false;
      },
      error: (err) => {
        this.showLoader = false;
      }
    });

  }

  checkOnlyNumbers(num: any) {
    const charCode = num.which ? num.which : num.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
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
