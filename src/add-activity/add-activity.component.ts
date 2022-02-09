import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  desc :any;
  citystate :any;
  place : any;
  date : any;
  hour : any;
  count : any;
  activitiesArray : any = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Save(){
    let lActivities = localStorage.getItem('activities');

    let des = this.desc;
    let citystate = this.citystate;
    let place = this.place;
    let date = this.date;
    let hour = this.hour;
    let count = this.count;

    let activityObj = {
      des,
      citystate,
      place,
      date,
      hour,
      count
    };
       
    if(lActivities != null)
    {
      let arrayList=JSON.parse(lActivities);
      arrayList.push(activityObj);

      localStorage.setItem("activities", JSON.stringify(arrayList));

    }
    else
    {   
      this.activitiesArray.push(activityObj);

      localStorage.setItem("activities", JSON.stringify(this.activitiesArray));
    }

    this.goActivities();
  }

  goActivities() {
    this.route.navigateByUrl("/activity-page");
  }
}
