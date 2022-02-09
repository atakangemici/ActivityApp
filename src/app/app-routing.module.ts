import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from '../activity-page/activity-page.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { AddActivityComponent } from '../add-activity/add-activity.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "register", component: RegisterComponent },
  { path: "activity-page", component: ActivityPageComponent },
  { path: "add-activity", component: AddActivityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
