import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subject } from 'rxjs/Subject'

/*
  ToolbarService acts as the communication between feed-toolbar and feed-body
*/
@Injectable()
export class ToolbarService {
  // Observables to track behavior
  public subredditFilter = new BehaviorSubject("");
  public sortByDate = new BehaviorSubject(false);
  public sortByScore = new BehaviorSubject(false);
  public sortOrder = false;
  public reset = new Subject();

  constructor() { }

}
