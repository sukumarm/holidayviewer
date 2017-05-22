import { Holiday } from '../holiday';
import { HolidayComponent } from '../holiday/holiday.component';
import { HolidayDetailService } from './holiday-detail.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css'],
  providers : []
})
export class HolidayDetailComponent implements OnInit {

  public holidayDetails: Holiday;
  constructor(private router: Router, private holidayService: HolidayDetailService) {

  }

      ngOnInit() {
        this.holidayDetails = this.holidayService.holiday;
    }
  }




