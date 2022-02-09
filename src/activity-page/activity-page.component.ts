import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
  activities : any = [];
  constructor() { }

  ngOnInit(): void {
    let lActivities = localStorage.getItem('activities');

    if(lActivities != null){
      this.activities=JSON.parse(lActivities);
    }
  }

}
