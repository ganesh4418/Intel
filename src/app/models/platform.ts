export interface ResearchAssistant {
    user: number;
    research_goal: string;
    research_objective: string;
    research_parameters: string;
    report_format: string;
    uploaded_file?: string;
}

export class Platform {
    user: number = 0;
    esg: boolean = false;
    finance: boolean = false;
    healthcare: boolean = false;
    technology: boolean = false;
    refresh_frequency: string = "";
}

export interface TrendingHeadline {
    data: TileItem[];
    timestamp: string;
}

export interface TileItem {
    title: string;
    url: string;
    image_url: string;
}

export interface MarketInsight {
    market_insights: TileItem[]
}

export interface UserMarketInsight {
    user_id: string;
    selected_industries: string[];
    refresh_frequency: string;
    db_data: MarketInsightDate[];
}

export interface MarketInsightDate {
    timestamp: string;
    data: TileItem[];
}

// export interface UserMarketInsight {
//     user_id: number;
//     timestamp: string;
//     data: TileItem[];
// }

export interface RecentTitles {
    recent_titles: ResearchHistory[]
}

export interface ResearchHistory {
    research_title: string;
    generated_report: string;
    file_format: string;
    displayFullText?: boolean;
}

export interface UserMarketInsightHistory {
    day: string;
    history: TileItem[];
}