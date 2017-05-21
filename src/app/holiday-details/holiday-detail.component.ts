import { Holiday } from '../holiday';
import { HolidayComponent } from '../holiday/holiday.component';
import { HolidayDetailService } from './holiday-detail.service';
import { Component} from '@angular/core';



@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css'],
  providers : []
})
export class HolidayDetailComponent {

  public holidayDetails: Holiday;
  constructor(private holidayService: HolidayDetailService) {
        console.log(holidayService.holiday);
        this.holidayDetails = holidayService.holiday;
  }
  }




