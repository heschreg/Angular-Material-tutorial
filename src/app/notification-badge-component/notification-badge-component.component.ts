import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-badge-component',
  templateUrl: './notification-badge-component.component.html',
  styleUrls: ['./notification-badge-component.component.css']
})
export class NotificationBadgeComponentComponent  {

  badgeCounter: number;
  hideMatBadge!: boolean;

  constructor() {
    this.badgeCounter = 0;
    this.hideMatBadge = true;
  }

  incrementCount() {
    this.badgeCounter++;
    this.hideMatBadge = false;
  }

  decreaseCount() {
    if(this.badgeCounter < 0)
     return;
    this.badgeCounter--;
    if(this.badgeCounter == 0){
      this.hideMatBadge = true;
    }
  }

  resetCount() {
    this.badgeCounter = 0;
  }

}
