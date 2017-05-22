import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtilityService {

  constructor(private router: Router) { }
  private isError = false;

  public isVerifyData(delegateValue: any) {
      if (delegateValue = null || delegateValue === {}) {
         this.router.navigate(['app-pagenotfound']);
        this.isError = true;
      }
    return this.isError;
}
}
