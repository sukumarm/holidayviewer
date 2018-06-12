
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'US-Holidays-Viewer';
  ngOnInit(): void {
      console.log('I am app component');
    }

}

