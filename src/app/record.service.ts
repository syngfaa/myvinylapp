import { Injectable } from '@angular/core';
import { Record } from './record';
import { RECORDS } from './mock-records';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  getRecords(): Observable<Record[]> {
      // TODO: send the message _after_ fetching the heroes
  this.messageService.add('RecordService: fetched records');
    return of (RECORDS);
  }

  getRecord(id: number): Observable<Record >{
      // TODO: send the message _after_ fetching the hero
    this.messageService.add('RecordService: fetched record id={id}');
    return of (RECORDS.find(record => record.id === id));
  }
  constructor(private messageService: MessageService) { }
}
