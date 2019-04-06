import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './records/Records.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'records', component: RecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
