import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


@Injectable()
export class ToolbarService {
  public subredditFilter = new BehaviorSubject("")
  constructor() { }

}
