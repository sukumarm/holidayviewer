import { Holiday } from '../holiday';
import { HolidayComponent } from '../holiday/holiday.component';
import { UtilityService } from '../utility.service';
import { HolidayDetailService } from './holiday-detail.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css'],
  providers : [UtilityService]
})
export class HolidayDetailComponent implements OnInit {

  public holidayDetails: Holiday;
  constructor(private router: Router, private utilityService:UtilityService) {

  }

      ngOnInit() {

          const retrievedObject = JSON.parse(localStorage.getItem('holidayDetails'));
          if (!this.utilityService.isVerifyData(retrievedObject)){
            this.holidayDetails = retrievedObject;
          }
    }
          
    
  }




