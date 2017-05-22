import { Holiday } from '../holiday';
import { HolidayDetailService } from '../holiday-details/holiday-detail.service';
import { HolidayService } from './holiday.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],
  providers: [HolidayService]
})
export class HolidayComponent implements OnInit {

  constructor( private holidayDetailService: HolidayDetailService, private holidayService: HolidayService) { }

  holidayList: Array<Holiday> = [];
  holidayData: any;


  redirectDetails(details: Holiday): void {
    this.holidayDetailService.holiday = details;

  }


  ngOnInit(): void {
    this.holidayService.retrieveHolidayData().subscribe(data =>  {
         this.holidayData = data.holidays;
         this.getFilteredValues(this.holidayData);
         return true;
    },
     error =>  {
          console.error('Error Retrieving Data');
          return Observable.throw(error);
     });

  }

    private getFilteredValues(holidayData: {}) {


      for (const key of Object.keys(holidayData)){
         const holidayKey = holidayData[key];


            this.holidayList.push(holidayKey[0]);
            if (holidayKey[1] != null) {
              this.holidayList.push(holidayKey[1]);
            }

      }

     }

}
