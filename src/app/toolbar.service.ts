import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


@Injectable()
export class ToolbarService {
  public subredditFilter = new BehaviorSubject("");
  public sortByDate = new BehaviorSubject(false);
  public sortByScore = new BehaviorSubject(false);

  constructor() { }

}
