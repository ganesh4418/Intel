import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MarketInsight, RecentTitles, ResearchAssistant, ResearchHistory, TileItem, UserMarketInsight } from 'src/app/models/platform';
import { LoginUserDetail } from 'src/app/models/user';
import { PlatformService } from 'src/app/shared/api-serviceEndpoint/platform.service';
import { UserService } from 'src/app/shared/user-service.service';
import { MarketInsightsComponent } from '../market-insights/market-insights.component';
import { SharedApiService } from '../../services/shared-api.service';


@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {

  @Input() data: string = '';
  loaderDisplay: boolean = false;
  isLoading: boolean = false;
  loadingText: string = 'Loading...';

  trendingHeadlinesHide: boolean = false;
  selectedFile: File | null | undefined;
  fileName: string = "";
  getInsightsClicked: boolean = false;
  userData: LoginUserDetail = {} as LoginUserDetail;
  goalWordsGiven: number = 0;
  researchWordsGiven: number = 0;
  parameterWordsGiven: number = 0;
  editResearchClick: boolean = false;
  userInsightExist: boolean = false;
  aiEngineResponse: string = "";
  sourcesResponses: string[] = [];
  trendingHeadlineList: TileItem[] = [];
  researchHistory: ResearchHistory[] = [];
  additionInput: string = "";
  getInsightsDownloadInput: string = "";

  modalBody: string = "";
  modalTitle: string = "";
  showModal = false;

  trendingHeadlineSubscription: Subscription | undefined;
  marketInsightsSubscription: Subscription | undefined;

  @ViewChild(MarketInsightsComponent) mktInsight = new MarketInsightsComponent(this.userService, this.router, this.service, this.sharedApiService);

  @ViewChild('goalInput') goalInput: ElementRef | undefined;
  @ViewChild('researchInput') researchInput: ElementRef | undefined;
  @ViewChild('parameters') parameters: ElementRef | undefined;
  blob: Blob | undefined;
  interval: any;

  progressMsgList: string[] = [" Sit back and relax, we are working on your inputs.", " Browsing web for relevant information",
    " Got the relevant information sources for your research inputs", " Extracting the information from web",
    " Analyzing the information.", " Please wait.. Your report is getting ready.", "Finalizing the report."];

  constructor(private userService: UserService, private router: Router, private service: PlatformService, private sharedApiService: SharedApiService, private activatedRoute: ActivatedRoute) {
    this.form.valueChanges.subscribe(value => {
      this.goalInput!.nativeElement.style.height = 'auto';
      this.goalInput!.nativeElement.style.height = `${this.goalInput!.nativeElement.scrollHeight}px`;

      this.researchInput!.nativeElement.style.height = 'auto';
      this.researchInput!.nativeElement.style.height = `${this.researchInput!.nativeElement.scrollHeight}px`;

      this.parameters!.nativeElement.style.height = 'auto';
      this.parameters!.nativeElement.style.height = `${this.parameters!.nativeElement.scrollHeight}px`;

      this.goalWordsGiven = (this.form.controls.goal.value! && this.form.controls.goal.value!.split("").length > 0 && this.form.controls.goal.value!.split(" ").length > 0) ? this.form.controls.goal.value!.split(" ").length : 0;
      this.researchWordsGiven = (this.form.controls.objects.value! && this.form.controls.objects.value!.split("").length > 0 && this.form.controls.objects.value!.split(" ").length > 0) ? this.form.controls.objects.value!.split(" ").length : 0;
      this.parameterWordsGiven = (this.form.controls.parameters.value! && this.form.controls.parameters.value!.split("").length > 0 && this.form.controls.parameters.value!.split(" ").length > 0) ? this.form.controls.parameters.value!.split(" ").length : 0;
    });
  }

  ngOnInit() {
    this.userService.researchMenuInvoked$.next(true);
    this.userInsightExist = false;
    this.editResearchClick = false;
    this.additionInput = "";
    this.userService.isUserLoggedIn$.subscribe((res) => {
      if (!res) {
        this.router.navigate([""]);
        return;
      }
    });
    this.userData = this.userService.userLoginData;
    this.getUserInsights();
    this.getTrendingHeadlineData();
    this.getResearchHistory();
    this.getUserMarketInsightsData();
  }

  form = new FormGroup({
    goal: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.max(500)]),
    objects: new FormControl('', [Validators.required,]),
    parameters: new FormControl('', [Validators.required]),
    uploadedFileFormat: new FormControl('', [Validators.required]),
    uploadFile: new FormControl('')
  });

  get researchForm() {
    return this.form.controls;
  }

  getUserMarketInsightsData() {
    this.marketInsightsSubscription = this.sharedApiService.getUserMarketInsights(this.userData.user_id).subscribe({
      next: (res) => {
        if (res) {
          this.sharedApiService.marketInsightHistoryList = res.db_data;
          this.sharedApiService.marketInsightList = res.db_data[0].data;

          if (!this.mktInsight) {
            this.mktInsight = new MarketInsightsComponent(this.userService, this.router, this.service, this.sharedApiService);
          }
          this.mktInsight.getMarketInsights();
          this.sharedApiService.triggerResearchComponent();
        }
      },
      error: (err) => {
      }
    });
  }

  // getMarketInsightsData() {
  //   this.isLLMCallFired = false;
  //   if (this.sharedApiService.marketInsightList.length == 0) {
  //     let userLastLoginDate: any = this.userData.last_login ? new Date(this.userData.last_login).setHours(0, 0, 0, 0) : this.userData.last_login;
  //     let currentDate = new Date().setHours(0, 0, 0, 0);
  //     if (userLastLoginDate == null)
  //       this.getLlmMarketInsightsData();
  //     else if (currentDate > userLastLoginDate) {
  //       this.getLlmMarketInsightsData();
  //       setTimeout(() => {
  //         this.getUserMarketInsightsData();
  //       }, 500);
  //     }
  //     else
  //       this.getUserMarketInsightsData();

  //     // if (userLastLoginDate == null || currentDate > userLastLoginDate)
  //     //   this.getLlmMarketInsightsData();
  //     // else
  //     //   this.getUserMarketInsightsData();
  //   }
  // }

  // getLlmMarketInsightsData() {
  //   this.isLLMCallFired = true;
  //   this.loaderDisplay = true;

  //   this.marketInsightsSubscription = this.sharedApiService.getLlmMarketInsights().subscribe({
  //     next: (res) => {
  //       if (res && res.market_insights && res.market_insights.length > 0) {
  //         this.sharedApiService.marketInsightList = res.market_insights;
  //         if (!this.mktInsight) {
  //           this.mktInsight = new MarketInsightsComponent(this.userService, this.router, this.service, this.sharedApiService);
  //         }
  //         this.mktInsight.getMarketInsights();
  //         this.sharedApiService.triggerResearchComponent();
  //       }
  //     },
  //     error: (err) => {
  //       alert(err.error);
  //     }
  //   });
  // }

  // getUserMarketInsightsData() {
  //   this.marketInsightsSubscription = this.sharedApiService.getUserMarketInsights(this.userData.user_id).subscribe({
  //     next: (res) => {
  //       if (res && res.length > 0) {
  //         this.sharedApiService.marketInsightHistoryList = res;
  //         if (!this.isLLMCallFired) {
  //           this.sharedApiService.marketInsightList = this.getUniqueMarketInsights(res);
  //         }
  //         if (!this.mktInsight) {
  //           this.mktInsight = new MarketInsightsComponent(this.userService, this.router, this.service, this.sharedApiService);
  //         }
  //         this.mktInsight.getMarketInsights();
  //         this.sharedApiService.triggerResearchComponent();
  //       }
  //     },
  //     error: (err) => {
  //     }
  //   });
  // }

  // getUniqueMarketInsights(data: UserMarketInsight1): TileItem[] {
  //   let userInsights: UserMarketInsight[] = [];
  //   let uniqueUserInsight: TileItem[] = [];
  //   data.map(d => {
  //     if (d.data.length > 0)
  //       userInsights.push(d);
  //   });

  //   uniqueUserInsight = JSON.parse(JSON.stringify(userInsights[0].data));

  //   return uniqueUserInsight;
  // }

  getUserInsights() {
    let researchAssistantData: ResearchAssistant = {} as ResearchAssistant;
    researchAssistantData.user = this.userData.user_id;
    const userId = this.userData.user_id;
    this.loaderDisplay = true;
    this.service.researchAssistant(userId, researchAssistantData, "get").subscribe((res: ResearchAssistant) => {
      if (res.user && res.user > 0) {
        this.userInsightExist = true;
        if (this.editResearchClick)
          this.fillUserResearchData(res);
      }
      this.loaderDisplay = false;
    });
  }

  fillUserResearchData(data: ResearchAssistant) {
    this.form.patchValue({
      goal: data.research_goal,
      objects: data.research_objective,
      parameters: data.research_parameters,
      uploadedFileFormat: data.report_format
    });
  }

  trendingHeadlineDisplay() {
    this.trendingHeadlinesHide = !this.trendingHeadlinesHide;
  }

  moreInsightsUpload(event: any) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile!.name;
  }

  removeFile() {
    this.selectedFile = null;
    this.fileName = "";
  }

  uploadFile() {
  }

  inputFieldWordCount(inputField: string) {
    switch (inputField) {
      case "goal": {
        if (this.form.get('goal')!.value!.toString().split(" ").length > 500) {
          this.form.controls['goal'].setErrors({ maxWords: true })
        } else {
          if (this.form.controls['goal'].hasError('maxWords'))
            delete this.form.controls['goal'].errors!['maxWords']
        }
        break;
      }
      case "objects": {
        if (this.form.get('objects')!.value!.toString().split(" ").length > 500) {
          this.form.controls['objects'].setErrors({ maxWords: true })
        } else {
          if (this.form.controls['objects'].hasError('maxWords'))
            delete this.form.controls['objects'].errors!['maxWords']
        }
        break;
      }
      case "parameters": {
        if (this.form.get('parameters')!.value!.toString().split(" ").length > 500) {
          this.form.controls['parameters'].setErrors({ maxWords: true })
        } else {
          if (this.form.controls['parameters'].hasError('maxWords'))
            delete this.form.controls['parameters'].errors!['maxWords']
        }
        break;
      }
    }
    this.form.updateValueAndValidity();
  }

  editResearchClicked() {
    this.getInsightsClicked = false;
    this.editResearchClick = true;
    // this.trendingHeadlinesHide = false;
    this.getUserInsights();
  }

  getTrendingHeadlineData() {
    this.trendingHeadlineList = this.sharedApiService.trendingHeadlineList;
    if (this.trendingHeadlineList.length == 0) {
      this.trendingHeadlineSubscription = this.sharedApiService.getTrendingHeadlines().subscribe({
        next: (res) => {
          if (res && res.length > 0) {
            this.trendingHeadlineList = res[0].data;
            this.sharedApiService.trendingHeadlineList = res[0].data;
            if (!this.mktInsight) {
              this.mktInsight = new MarketInsightsComponent(this.userService, this.router, this.service, this.sharedApiService);
            }
            this.mktInsight.getTrendingHeadlines();
            this.sharedApiService.triggerResearchComponent();
          } else {
            alert("No data found for Trending Headlines");
          }
        },
        error: (err) => {
          alert(err.error.error);
        }
      });
    }
  }

  getResearchHistory() {
    this.service.getResearchHistory().subscribe(res => {
      if (res && res.recent_titles && res.recent_titles.length > 0) {
        this.researchHistory = res.recent_titles;
        this.researchHistory.map(r => r.displayFullText = false);
      }
    });
  }

  cancelClicked() {
    this.form.reset();
    this.goalWordsGiven = 0;
    this.researchWordsGiven = 0;
    this.parameterWordsGiven = 0;
  }

  getInsights() {
    if (this.form.valid) {
      this.getInsightsDownloadInput = "";
      const user_id = this.userData.user_id;
      const formData = new FormData();
      formData.append('user', user_id.toString())
      formData.append('report_format', this.form.get('uploadedFileFormat')!.value!)
      formData.append('research_goal', this.form.get('goal')!.value!)
      formData.append('research_objective', this.form.get('objects')!.value!)
      formData.append('research_parameters', this.form.get('parameters')!.value!)
      formData.append('additional_text_input', this.additionInput);
      let userId: number = this.userData.user_id;
      let optType: string = this.userInsightExist ? "put" : "post";

      this.showModal = true;
      this.modalTitle = "Status";
      this.progressMsgsDisplay();
      this.loaderDisplay = true;

      this.service.researchAssistant(userId, formData, optType).subscribe((res: any) => {
        clearInterval(this.interval);
        this.showModal = false;
        this.loaderDisplay = false;
        // this.trendingHeadlinesHide = false;
        alert('request sent');
        this.getInsightsClicked = true;
        this.aiEngineResponse = res.report_result;
        // this.sourcesResponses = res.sources.join(",");
        this.sourcesResponses = res.sources;
        this.getInsightsDownloadInput = res.research_topic;
      });
    }
  }
  getInsightsAdiitional() {
    if (this.form.valid) {
      this.getInsightsDownloadInput = "";
      const user_id = this.userData.user_id;
      const formData = new FormData();
      formData.append('user', user_id.toString())
      formData.append('report_format', this.form.get('uploadedFileFormat')!.value!)
      formData.append('research_goal', this.form.get('goal')!.value!)
      formData.append('research_objective', this.form.get('objects')!.value!)
      formData.append('research_parameters', this.form.get('parameters')!.value!)
      formData.append('additional_text_input', this.additionInput);
      let userId: number = this.userData.user_id;

      this.showModal = true;
      this.modalTitle = "Status";
      this.progressMsgsDisplay();
      this.loaderDisplay = true;

      this.service.AddistionalInformation(userId, formData).subscribe((res: any) => {
        clearInterval(this.interval);
        this.showModal = false;
        this.loaderDisplay = false;
        // this.trendingHeadlinesHide = false;
        alert('request sent');
        this.getInsightsClicked = true;
        this.aiEngineResponse = res.report_result;
        // this.sourcesResponses = res.sources.join(",");
        this.sourcesResponses = res.sources;
        this.getInsightsDownloadInput = res.research_topic;
      });
    }
  }
  progressMsgsDisplay() {
    let msgList: string[] = JSON.parse(JSON.stringify(this.progressMsgList));
    this.modalBody = msgList[0];
    msgList.splice(0, 1);

    this.interval = setInterval(() => {
      if (msgList.length == 0)
        clearInterval(this.interval);
      else {
        this.modalBody = msgList[0];
        msgList.splice(0, 1);
      }
    }, 10000);
  }

  regenerateInsights() {
    if (this.form.valid) {
      this.showModal = true;
      this.modalTitle = "Status";
      this.progressMsgsDisplay();
      this.loaderDisplay = true;

      this.service.researchAssistantRegenarate().subscribe((res: any) => {
        clearInterval(this.interval);
        this.showModal = false;
        this.loaderDisplay = false;
        this.trendingHeadlinesHide = false;
        alert('request sent');
        this.getInsightsClicked = true;
        this.aiEngineResponse = res.report_result;
        this.getInsightsDownloadInput = res.research_topic;
      });
    }

  }

  redirectUrl(event: MouseEvent, url: string) {
    if (event.button === 0) {
      // Open link in a new tab
      window.open(url, '_blank');
      event.preventDefault(); // Prevent the default behavior (opening in the same tab)
    }
  }

  downloadResearchHistoryReport(obj: ResearchHistory) {
    if (obj.displayFullText) {
      obj.displayFullText = false;
    } else {
      let title: string = JSON.parse(JSON.stringify(obj.research_title));
      title = title?.replaceAll(" ", "%20");
      let fileTitle = title;
      obj.displayFullText = true;
      this.callDownloadApi(title);
    }

    // this.service.downloadReport(title).subscribe(res => {
    //   this.blob = new Blob([res], { type: 'application/pdf' });

    //   var downloadURL = window.URL.createObjectURL(res);
    //   var link = document.createElement('a');
    //   link.href = downloadURL;
    //   link.download = fileTitle;
    //   link.click();
    // });
  }

  downloadInsightsReport(title: string) {
    title = title?.replaceAll(" ", "%20");
    let fileTitle = title;
    this.callDownloadApi(title);

    // this.service.downloadReport(title).subscribe(res => {
    //   this.blob = new Blob([res], { type: 'application/pdf' });

    //   var downloadURL = window.URL.createObjectURL(res);
    //   var link = document.createElement('a');
    //   link.href = downloadURL;
    //   link.download = fileTitle;
    //   link.click();
    // });
  }

  callDownloadApi(title: string) {
    this.service.downloadReport(title).subscribe(res => {
      this.blob = new Blob([res], { type: 'application/pdf' });

      var downloadURL = window.URL.createObjectURL(res);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = title;
      link.click();
    });
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnDestroy(): void {
    this.service.trendingHeadlineList = [];
    this.service.marketInsightList = [];
    if (location.href.split("#/").length > 1 && (location.href.split("#/")[1] == "home" || location.href.split("#/")[1] == "")) {
      this.trendingHeadlineSubscription!.unsubscribe();
      this.marketInsightsSubscription!.unsubscribe();
    }
  }
}

