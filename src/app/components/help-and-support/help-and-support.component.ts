import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelpAndSupport } from 'src/app/models/user';
import { HelpAndSupportService } from 'src/app/shared/api-serviceEndpoint/help-and-support.service';
import { ValidationExp } from 'src/app/shared/validation';
import { CountryList, CountryModel } from 'src/app/shared/country';


@Component({
  selector: 'app-help-and-support',
  templateUrl: './help-and-support.component.html',
  styleUrls: ['./help-and-support.component.css']
})
export class HelpAndSupportComponent {
  showModal = false;
  showLoader: boolean = false;
  modalBody: string = "";
  modalTitle: string = "";
  countryList: CountryModel[] = [];
  countryListCopy: CountryModel[] = [];
  countryFlagCode: string = "ZA";
  countryDialCode: string = "+27"
  showCountryList: boolean = false;
  countryContactMaxLength: number = 12;
  // fullNamePatternMsg: string = "Full Name should accept only upper case and lower case letters and first word should have 3 or more characters.";
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
  constructor(private service: HelpAndSupportService) {

  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.nameValidation)]),
    company: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.companyValidation)]),
    email: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.emailValidation)]),
    number: new FormControl('', [Validators.required, Validators.pattern(ValidationExp.numberValidation)]),

  });

  get f() {
    return this.form.controls;
  }

  shareDetail() {
    console.log(this.form.value);

    let contactData: HelpAndSupport = {} as HelpAndSupport;
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
    this.service.helpAndSupport(contactData).subscribe({
      next: () => {
        this.showModal = true;
      this.modalBody = "Your details are shared successfully. We will get back to you very soon!";
      this.modalTitle = "Help and Support";
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
