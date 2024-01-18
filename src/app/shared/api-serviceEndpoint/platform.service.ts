import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarketInsight, Platform, RecentTitles, TileItem, TrendingHeadline } from 'src/app/models/platform';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  envUrl = environment.apiUrl;
  trendingHeadlineList: TileItem[] = [];
  marketInsightList: TileItem[] = [];

  constructor(private httpClient: HttpClient) { }

  userCustomizedInsights(userId: number, data: any, trnType: string): Observable<Platform> {
    if (trnType == "get")
      return this.httpClient.get<any>(this.envUrl + 'customize_insights/' + userId + '/');

    else if (trnType == "post")
      return this.httpClient.post<any>(this.envUrl + 'customize_insights/', data);

    else if (trnType == "put")
      return this.httpClient.put<any>(this.envUrl + 'customize_insights/' + userId + '/', data);

    return of();
  }

  researchAssistant(userId: number, data: any, trnType: string): Observable<any> {
    if (trnType == "get")
      return this.httpClient.get<any>(this.envUrl + 'inputs-report-generation/' + userId + '/');

    else if (trnType == "post")
      return this.httpClient.post<any>(this.envUrl + 'inputs-report-generation/', data);

    else if (trnType == "put")
      return this.httpClient.put<any>(this.envUrl + 'inputs-report-generation/' + userId + '/', data);

    return of(1);
  }
  AddistionalInformation(userId: number, data: any,): Observable<any>{
    return this.httpClient.put<any>(this.envUrl + 'inputs-report-generation/' + userId + '/', data)

  }

  researchAssistantRegenarate(): Observable<any>{
    return this.httpClient.get<any>(this.envUrl + 'report-regeneration/')

  }

  uploadImage(file: File, userId: number): Observable<Response> {
    const formData = new FormData();
    const blob = new Blob([file], { type: file.type });
    formData.append('profile_photo', blob, file.name);
    return this.httpClient.put<Response>(this.envUrl + 'user-profile/' + userId + '/photo/', formData);
  }

  getProfileImage(userID: any): Observable<any> {
    return this.httpClient.get<any>(this.envUrl + 'user-profile/' + userID + '/photo/')
  }

  getTrendingHeadlines(): Observable<TrendingHeadline> {
    return this.httpClient.get<TrendingHeadline>(this.envUrl + 'trending-headlines/');
  }

  getResearchHistory(): Observable<RecentTitles> {
    return this.httpClient.get<RecentTitles>(this.envUrl + 'recent-research-titles/')
  }

  getRecentResearchTitle(): Observable<TrendingHeadline> {
    return this.httpClient.get<TrendingHeadline>(this.envUrl + 'trending-headlines/');
  }

  downloadReport(researchTitle?: string): Observable<any> {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };

    return this.httpClient.get<any>(this.envUrl + 'download_report/' + researchTitle + '/', httpOptions);
  }

  getMarketInsights(): Observable<MarketInsight> {
    return this.httpClient.get<MarketInsight>(this.envUrl + 'market_insights/')
  }
}
