import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  records: Record[] = [];
 
  constructor(private recordService: RecordService) { }
 
  ngOnInit() {
    this.getRecords();
  }
 
  getRecords(): void {
    this.recordService.getRecords()
      .subscribe(records => this.records = records.slice(1, 5));
  }
}