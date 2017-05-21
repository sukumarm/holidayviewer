import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdButton} from '@angular/material';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HolidayDetailComponent } from './holiday-details/holiday-detail.component';
import { HolidayDetailService } from './holiday-details/holiday-detail.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HolidayComponent } from './holiday/holiday.component';

const appRoutes: Routes = [
  { path: 'holiday-details', component: HolidayDetailComponent },

  {
    path: 'usholiday',
    component: HolidayComponent,
    data: { title: 'USA Holiday Viewer' }
  },
  { path: '',
    redirectTo: '/usholiday',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HolidayDetailComponent,
    PagenotfoundComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HolidayDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
