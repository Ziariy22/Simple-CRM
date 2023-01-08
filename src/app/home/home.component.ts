import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  router: any;
  title = 'clock-greets';
  time: Date | undefined;
  hours: number | undefined;
  msg: string | undefined;
  link!: string;


  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.decide();
  }

  decide() {
    this.hours = new Date().getHours();
    console.log("this.hours", this.hours)
    if (this.hours < 11) {
      this.msg = "Good morning"
    } else if (this.hours < 18) {
      this.msg = "Good afternoon"
    } else if (this.hours < 24) {
      this.msg = "Good evening"
    } else if (this.hours < 6) {
      this.msg = "Good night"
    }
  }

  ngOnInit(): void {
  }



}
