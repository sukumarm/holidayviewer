import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HolidayService {
  serviceData: any;
  private holidayApiURL = 'https://holidayapi.com/v1/holidays?key=254d7a1c-2016-4867-9d16-d01954c7cf09&country=US&year=2015';
  constructor(public http: Http) { }

  private extractData(res) {
    if (res.status < 200 || res.status >= 300) {
       throw new Error('Bad response status: ' + res.status);
    }
    this.serviceData = res.json();
    return this.serviceData || {};
  }

    retrieveHolidayData(): Observable<any> {
      return this.http.get(this.holidayApiURL).map(this.extractData);
    }
}
