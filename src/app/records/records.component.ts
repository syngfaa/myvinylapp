import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { Record } from '../record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  records: Record[];

  selectedRecord: Record;

  getRecords(): void {
      this.recordService.getRecords()
      .subscribe(records => this.records = records);
  }
  constructor(private recordService: RecordService) { 
  }

  ngOnInit() {
    this.getRecords();
  }

  onSelect(record: Record): void {
    this.selectedRecord = record;
  }

}
