import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from '../components/analytics/analytics.component';
import { DepartmentComponent } from '../components/department/department.component';
import { TimesheetComponent } from '../components/timesheet/timesheet.component';

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
