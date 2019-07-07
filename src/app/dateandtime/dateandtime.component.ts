import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dateandtime',
  templateUrl: './dateandtime.component.html',
  styleUrls: ['./dateandtime.component.css']
})
export class DateandtimeComponent implements OnInit {

 // datee :string = new Date().toDateString();

 // time :string = new Date().toLocaleTimeString();
  datenow :string;
  timenow : string;
  constructor() {
    setInterval(() => {
      let datenow  = new Date();
      let timenow = new Date();

      this.datenow= datenow.toDateString();
      this.timenow= timenow.toLocaleTimeString();

    },1000)
    
   }

  ngOnInit() {
  }

}
