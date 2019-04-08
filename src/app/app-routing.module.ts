import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RecordDetailComponent }  from './record-detail/record-detail.component';
import { RecordsComponent } from './records/records.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'records', component: RecordsComponent,  
  children: [
    {path: 'detail/:id', component: RecordDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
