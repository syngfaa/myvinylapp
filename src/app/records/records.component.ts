import { Component, OnInit } from '@angular/core';
import { RECORDS } from '../mock-records';
import { Record } from '../record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records = RECORDS;
  selectedRecord: Record;
  constructor() { }

  ngOnInit() {
  }

  onSelect(record: Record): void {
    this.selectedRecord = record;
  }

}
