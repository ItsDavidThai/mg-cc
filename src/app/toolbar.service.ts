import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subject } from 'rxjs/Subject'


@Injectable()
export class ToolbarService {
  public subredditFilter = new BehaviorSubject("");
  public sortByDate = new BehaviorSubject(false);
  public sortByScore = new BehaviorSubject(false);
  public sortOrder = false;
  public reset = new Subject()

  constructor() { }

}
