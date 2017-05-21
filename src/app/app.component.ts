
import { Holiday } from './holiday';
import { HolidayDetailService } from './holiday-details/holiday-detail.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'US-Holidays-Viewer';
  ngOnInit(): void {

    }

}
