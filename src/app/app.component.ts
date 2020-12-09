import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppApiService } from './service/app-api.service';
import { AppDataService } from './service/app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private _appApiService: AppApiService, private _appDataService: AppDataService){}
  
  ngOnInit() {
    this._appApiService.getUsersRecord().then((data: any) => {
      if (data && data.length) {
        this._appDataService.setAppData(data);
      }
    })
  }
}
