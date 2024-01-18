import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedApiService } from 'src/app/Platform-Page/services/shared-api.service';
import { PlatformService } from 'src/app/shared/api-serviceEndpoint/platform.service';
import { UserService } from 'src/app/shared/user-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoutUrl: string | undefined;

  highlightMenu: any = { 'border-bottom': '1px solid white' };
  home_style: any = this.highlightMenu;
  about_style: any = "";
  research_style: any = "";
  menu_style: any = "";
  isUserLoggedIn: boolean = false;
  loggedInUserName: string = "";
  mainMenuClicked: boolean = false;
  isMenuOpen = false;

  researchMenuInvokedSubscription: Subscription | undefined;
  isUserLoginSubscription: Subscription | undefined;
  getUserProfileImg: string = '';

  @HostListener('document:click', ['$event'])
  clickout() {
    this.isMenuOpen = false;
  }

  constructor(private userService: UserService, private router: Router, private platformService: PlatformService,
    private sharedApiService: SharedApiService, private logoutservice: UserService) {
  }

  ngOnInit() {
    this.mainMenuClicked = false;
    this.isUserLoggedIn = false;

    if (location.href.split("#/").length == 1)
      location.replace(location.href + '#/');

    this.menuClicked(location.href.split("#/")[1]);

    this.isUserLoginSubscription = this.userService.isUserLoggedIn$.subscribe(res => {
      if (res) {
        this.isUserLoggedIn = res;
        this.userLogin();
      }
    });
  }

  userLogin() {
    this.researchMenuInvokedSubscription = this.userService.researchMenuInvoked$.subscribe(res => {
      if (res) {
        this.loggedInUserName = this.userService.userLoginData.first_name + " " + this.userService.userLoginData.last_name;
        this.mainMenuClicked = true;
        this.menuClicked("research");
        this.getProfileImage();
      }
    });
  }

  menuClicked(type?: string) {
    this.home_style = {};
    this.research_style = {};
    this.menu_style = {};
    this.about_style = {};

    switch (type) {
      case "home":
      case "": {
        this.home_style = this.highlightMenu;
        break;
      }
      case "about": {
        this.about_style = this.highlightMenu;
        break;
      }
      case "research": {
        this.research_style = this.highlightMenu;
        break;
      }
      case "marketInsights": {
        this.menu_style = this.highlightMenu;
        break;
      }
    }
  }

  homeRedirect() {
    // this.logout();
    // this.router.navigate(["home"]);
    location.replace(location.host + '/#/' + location.pathname == '/' ? " " : location.pathname);



  }

  userProfile() {
    this.userService.isUserProfileClicked = true;
    this.router.navigate(["platform"]);
  }

  logout() { //why password, only user email or user id is fine
    this.userService.userLogout(this.userService.userLoginData.email).subscribe({
      next: (res) => {
        if (res) {
          alert(res);
          this.clearUserSession();
        }
      },
      error: () => {
        this.clearUserSession();
      }
    })
  }

  clearUserSession() {
    this.researchMenuInvokedSubscription!.unsubscribe();
    this.mainMenuClicked = false;
    this.isUserLoggedIn = false;
    this.loggedInUserName = "";
    this.isMenuOpen = false;
    this.sharedApiService.marketInsightList = [];
    this.sharedApiService.trendingHeadlineList = [];
    this.menuClicked("");
    location.replace(location.host + '/#/' + location.pathname == '/' ? " " : location.pathname);
  }

  // logout() {
  //   this.researchMenuInvokedSubscription!.unsubscribe();
  //   this.mainMenuClicked = false;
  //   this.isUserLoggedIn = false;
  //   this.loggedInUserName = "";
  //   this.isMenuOpen = false;
  //   this.sharedApiService.marketInsightList = [];
  //   this.sharedApiService.trendingHeadlineList = [];
  //   this.menuClicked("");
  //   location.replace(location.host + '/#/' + location.pathname == '/' ? " " : location.pathname);
  //   // this.logoutservice.userLogout().subscribe(
  //   //   (url) => {
  //   //     this.logoutUrl = url;
  //   //     console.log('Logout URL:', this.logoutUrl);
  //   //   },
  //   //   (error) => {
  //   //     console.error('Error fetching logout URL:', error);
  //   //   }

  // }

  profileRedirect() {
    this.isMenuOpen = !this.isMenuOpen;

  }


  getProfileImage() {
    const user_id = this.userService.userLoginData.user_id;

    this.platformService.getProfileImage(user_id).subscribe((img => {
      this.getUserProfileImg = img.profile_photo
    }))
  }
}
