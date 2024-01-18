import { Component } from '@angular/core';
import { UserService } from './shared/user-service.service';
import { UserActivityService } from './Platform-Page/services/user-activity.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intellisence';

  constructor(private router: Router, private userActivityService: UserActivityService) {

  }

  ngOnInit() {
    this.initialIdleSettings();
  }

  private initialIdleSettings() {
    const idleTimeoutInSeconds: number = environment.idleTimeInMinutes * 5;
    this.userActivityService.startWatching(idleTimeoutInSeconds).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {        
        alert("Session expired.");
        // location.replace(location.origin);
        location.replace(location.host +'/#/' + location.pathname== '/' ? " " : location.pathname);
      }
    });
  }
}



