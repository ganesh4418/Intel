import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TileItem, UserMarketInsightHistory } from 'src/app/models/platform';
import { PlatformService } from 'src/app/shared/api-serviceEndpoint/platform.service';
import { UserService } from 'src/app/shared/user-service.service';
import { SharedApiService } from '../../services/shared-api.service';

@Component({
  selector: 'app-market-insights',
  templateUrl: './market-insights.component.html',
  styleUrls: ['./market-insights.component.css']
})
export class MarketInsightsComponent implements OnDestroy {

  marketInsightData: TileItem[] = [];
  trendingHeadlineList: TileItem[] = [];
  marketInsightsHistoryData: UserMarketInsightHistory[] = [];

  mktInsLoaderDisplay: boolean = false;
  trendHeadLoaderDisplay: boolean = false;

  constructor(private userService: UserService, private router: Router, private service: PlatformService, private sharedApiService: SharedApiService) { }

  ngOnInit(): void {
    this.sharedApiService.researchComp$.subscribe(() => {
      this.getMarketInsights();
      this.getTrendingHeadlines();
    });

    this.userService.isUserLoggedIn$.subscribe((res) => {
      if (!res) {
        this.router.navigate([""]);
        return;
      }
    });

    this.getMarketInsights();
    this.getTrendingHeadlines();
    this.getMarketInsightsHistory();
  }

  getMarketInsights() {
    this.marketInsightData = this.sharedApiService.marketInsightList;
  }

  getMarketInsightsHistory() {
    if (this.sharedApiService.marketInsightHistoryList.length > 0) {
      this.marketInsightsHistoryData = [];
      this.sharedApiService.marketInsightHistoryList.forEach(mh => {
        let mhDate: number = new Date(mh.timestamp).getTime(); //only date is coming from api
        let todayDate = new Date();
        let currentDate: number = new Date(todayDate.getFullYear() + '-' + todayDate.getMonth() + 1 + '-' + todayDate.getDate()).getTime();
        let dayInText: string = this.getDayInTextByDiff(Math.round((currentDate - mhDate) / (1000 * 60 * 60 * 24)));
        let index: number = this.marketInsightsHistoryData.findIndex(m => m.day == dayInText);
        if (index >= 0)
          this.marketInsightsHistoryData[index].history.push(...mh.data);
        else
          this.marketInsightsHistoryData.push({ day: dayInText, history: mh.data });
      });
    }
  }

  getDayInTextByDiff(diff: number): string {
    switch (diff) {
      case 0: {
        return "Today"
      };
      case 1: {
        return "Yesterday"
      }
      default: {
        return "Others"
      }
    }
  }

  getTrendingHeadlines() {
    this.trendingHeadlineList = this.sharedApiService.trendingHeadlineList;
  }

  redirectUrl(event: MouseEvent, url: string) {
    if (event.button === 0) {
      // Open link in a new tab
      window.open(url, '_blank');
      event.preventDefault(); // Prevent the default behavior (opening in the same tab)
    }
  }

  ngOnDestroy(): void {
    this.service.marketInsightList = [];
  }
}