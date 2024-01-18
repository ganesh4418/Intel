import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MarketInsight, MarketInsightDate, TileItem, TrendingHeadline, UserMarketInsight } from 'src/app/models/platform';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  envUrl = environment.apiUrl;
  trendingHeadlineList: TileItem[] = [];
  marketInsightList: TileItem[] = [];
  marketInsightHistoryList: MarketInsightDate[] = [];
  private researchComp = new Subject<void>();
  researchComp$ = this.researchComp.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  triggerResearchComponent() {
    this.researchComp.next();
  }

  getTrendingHeadlines(): Observable<TrendingHeadline[]> {
    return this.httpClient.get<TrendingHeadline[]>(this.envUrl + 'trending-headlines/');
  }

  getLlmMarketInsights(): Observable<MarketInsight> {
    return this.httpClient.get<MarketInsight>(this.envUrl + 'market_insights/')
  }

  getUserMarketInsights(userId: number): Observable<UserMarketInsight> {
    return this.httpClient.get<UserMarketInsight>(this.envUrl + 'user_market_insights/' + userId + '/')
  }
}
