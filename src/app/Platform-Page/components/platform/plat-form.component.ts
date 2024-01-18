import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user-service.service';
import { PlatformService } from 'src/app/shared/api-serviceEndpoint/platform.service';
import { Platform } from 'src/app/models/platform';
import { LoginUserDetail } from 'src/app/models/user';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}


@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styleUrls: ['./plat-form.component.css']
})
export class PlatFormComponent implements OnInit {

  username!: string;
  selectedImage: File | undefined;
  imageUrl: string | null = null;
  imagePreview: any;
  user: LoginUserDetail | undefined;
  selectedFile: ImageSnippet | undefined;
  base64Content: string = "";
  platformData: Platform = new Platform();
  selectedIndustry: string[] = [];
  selectedMarketInsight: string = "";
  userCustomInsightExist: boolean = false;

  @ViewChild("esg") esg!: ElementRef;
  @ViewChild("finance") finance!: ElementRef;
  @ViewChild("healthcare") healthcare!: ElementRef;
  @ViewChild("technology") technology!: ElementRef;

  @ViewChild("daily") dailyInsight!: ElementRef;
  @ViewChild("weekly") weeklyInsight!: ElementRef;
  @ViewChild("biweekly") biweeklyInsight!: ElementRef;
  @ViewChild("monthly") monthlyInsight !: ElementRef;

  constructor(private userService: UserService, private route: Router, private service: PlatformService) { }

  ngOnInit(): void {
    this.userService.isUserLoggedIn$.subscribe((res) => {
      if (!res) {
        this.route.navigate([""]);
        return;
      }
    })

    this.user = this.userService.userLoginData;
    this.getUserCustomizedInsights();
    const user_id = this.user!.user_id;
    this.getUserProfile(user_id);
  }

  getUserCustomizedInsights() {
    this.userCustomInsightExist = false;
    this.service.userCustomizedInsights(this.user!.user_id, "", "get").subscribe((res: Platform) => {
      if (res && res.user == this.user!.user_id && (res.finance || res.healthcare || res.technology || res.esg)) {
        this.userCustomInsightExist = true;
        if (!this.userService.isUserProfileClicked) {
          this.route.navigate(['research']);
        } else {
          Object.keys(res).forEach(key => {
            if (typeof res[key as keyof Platform] === 'boolean' && res[key as keyof Platform])
              this.industryClicked(key, false);
          });
          this.marketInsightClicked(res.refresh_frequency, false);
        }
      }
    });
  }


  profileUpload(event: any): void {

    const file: File = event.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imagePreview = event.target.value;
      this.service.uploadImage(this.selectedFile.file, this.user!.user_id).subscribe(
        (res: any) => {
          this.imagePreview = res.data.profile_photo;
        },
        (err) => {
        })
    });

    reader.readAsDataURL(file);
    // this.getUserProfile();
  }

  getUserProfile(user_id: any) {
    this.service.getProfileImage(user_id).subscribe((img: any) => {
      this.imagePreview = img.profile_photo;
    })
  }

  downloadImage() {
    const blobData = this.convertBase64ToBlobData(this.base64Content);
  }

  convertBase64ToBlobData(base64Data: string, contentType: string = 'image/png', sliceSize = 512) {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  industryClicked(industry: string, isSave: boolean = false) {
    let event;
    switch (industry) {
      case 'esg': {
        event = this.esg.nativeElement;
        break;
      };
      case 'finance': {
        event = this.finance.nativeElement;
        break;
      };
      case 'healthcare': {
        event = this.healthcare.nativeElement;
        break;
      };
      case 'technology': {
        event = this.technology.nativeElement;
        break;
      };
    }

    if (!(event.classList.contains('focus'))) {
      event.classList.add('focus');
      event.children[0].classList.add('focus-text');
      this.selectedIndustry.push(industry);
    }
    else {
      event.classList.remove('focus');
      event.children[0].classList.remove('focus-text');
      this.selectedIndustry.splice(this.selectedIndustry.findIndex(x => x == industry), 1);
    }

    this.updateIndustryMarketInsight(isSave);
  }

  marketInsightClicked(market: string, isSave: boolean = false) {
    let event;
    switch (market) {
      case 'daily': {
        event = this.dailyInsight.nativeElement;
        break;
      };
      case 'weekly': {
        event = this.weeklyInsight.nativeElement;
        break;
      };
      case 'biweekly': {
        event = this.biweeklyInsight.nativeElement;
        break;
      };
      case 'monthly': {
        event = this.monthlyInsight.nativeElement;
        break;
      };
    }

    if (this.dailyInsight.nativeElement.classList.contains('focus')) {
      this.dailyInsight.nativeElement.classList.remove('focus');
      this.dailyInsight.nativeElement.children[0].classList.remove('focus-text');
      this.selectedMarketInsight = ""

      if (event.textContent.toLowerCase() === this.dailyInsight.nativeElement.children[0].textContent.toLowerCase()) {
        event.classList.add('focus');
        event.children[0].classList.add('focus-text');
        this.selectedMarketInsight = market;
      }
    }

    if (this.weeklyInsight.nativeElement.classList.contains('focus')) {
      this.weeklyInsight.nativeElement.classList.remove('focus');
      this.weeklyInsight.nativeElement.children[0].classList.remove('focus-text');
      this.selectedMarketInsight = "";

      if (event.textContent.toLowerCase() === this.weeklyInsight.nativeElement.children[0].textContent.toLowerCase()) {
        event.classList.add('focus');
        event.children[0].classList.add('focus-text');
        this.selectedMarketInsight = market;
      }
    }

    if (this.biweeklyInsight.nativeElement.classList.contains('focus')) {
      this.biweeklyInsight.nativeElement.classList.remove('focus');
      this.biweeklyInsight.nativeElement.children[0].classList.remove('focus-text');
      this.selectedMarketInsight = "";

      if (event.textContent.toLowerCase() === this.biweeklyInsight.nativeElement.children[0].textContent.toLowerCase()) {
        event.classList.add('focus');
        event.children[0].classList.add('focus-text');
        this.selectedMarketInsight = market;
      }
    }

    if (this.monthlyInsight.nativeElement.classList.contains('focus')) {
      this.monthlyInsight.nativeElement.classList.remove('focus');
      this.monthlyInsight.nativeElement.children[0].classList.remove('focus-text');
      this.selectedMarketInsight = "";

      if (event.textContent.toLowerCase() === this.monthlyInsight.nativeElement.children[0].textContent.toLowerCase()) {
        event.classList.add('focus');
        event.children[0].classList.add('focus-text');
        this.selectedMarketInsight = market;
      }
    }

    if (!(event.classList.contains('focus'))) {
      event.classList.add('focus');
      event.children[0].classList.add('focus-text');
      this.selectedMarketInsight = market;
    } else {
      event.classList.remove('focus');
      event.children[0].classList.remove('focus-text');
      this.selectedMarketInsight = "";
    }

    if (isSave)
      this.updatePlatformData();
  }

  updateIndustryMarketInsight(isSave: boolean = false) {
    this.platformData = new Platform();
    this.selectedIndustry.forEach((s: string) => {
      if (s == "esg")
        this.platformData![s] = true;
      if (s == "finance")
        this.platformData![s] = true;
      else if (s == "healthcare")
        this.platformData![s] = true;
      else if (s == "technology")
        this.platformData![s] = true;
    });

    if (isSave)
      this.updatePlatformData();
  }

  updatePlatformData() {
    if ((this.platformData.finance || this.platformData.healthcare || this.platformData.technology || this.platformData.esg) && this.selectedMarketInsight != "") {
      this.platformData.refresh_frequency = this.selectedMarketInsight;
      this.platformData.user = this.userService.userLoginData.user_id;
      let optType: string = this.userCustomInsightExist ? "put" : "post";
      this.service.userCustomizedInsights(this.user!.user_id, this.platformData, optType).subscribe(res => {
        this.route.navigate(['research']);
      });
    }
  }

}
