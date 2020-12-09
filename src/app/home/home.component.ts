import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../service/app-data.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  userData = [];
  filter = {
    name: "",
    username: "",
    email: "",
    website: "",
    company: "",
  };
  filteredDataObj: any[];

  constructor(private _appDataService: AppDataService) {}

  ngOnInit() {
    this._appDataService.getAppData().subscribe((data) => {
      if (data && data.length) {
        this.userData = data;
        this.onButtonClick();
      }
    });
  }

  buildFilter = () => {
    let query = {};
    for (let keys in this.filter) {
      if (this.filter[keys]) {
        query[keys] = this.filter[keys];
      }
    }
    return query;
  };

  onButtonClick() {
    const query = this.buildFilter();
    const filteredData = this.userData.filter((item) => {
      for (let key in query) {
        if (query[key] !== item[key]) {
          return false;
        }
      }
      return true;
    });
    this.filteredDataObj =  filteredData;
  }
}
