import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  private endTime;
  private now;
  private timeLeft;
  private days;
  private hours;
  private minutes;
  private seconds;

  constructor() { 

  }

  ngOnInit() {
       Observable.interval(1000).subscribe(x => {
        this.makeTimer();
      });
  }

  makeTimer() {

      this.endTime = new Date("November 13, 2019 18:00:00 PDT");			
      this.endTime = (Date.parse(this.endTime)) / 1000;

      this.now = new Date();
      this.now = (Date.parse(this.now) / 1000);

      this.timeLeft = this.endTime - this.now;

      this.days = Math.floor(this.timeLeft / 86400); 
      this.hours = Math.floor((this.timeLeft - (this.days * 86400)) / 3600);
      this.minutes = Math.floor((this.timeLeft - (this.days * 86400) - (this.hours * 3600 )) / 60);
      this.seconds = Math.floor((this.timeLeft - (this.days * 86400) - (this.hours * 3600) - (this.minutes * 60)));

      if (this.hours < "10") { this.hours = "0" + this.hours; }
      if (this.minutes < "10") { this.minutes = "0" + this.minutes; }
      if (this.seconds < "10") { this.seconds = "0" + this.seconds; }

  }
  //setInterval(function() { this.makeTimer(); }, 1000);
}
