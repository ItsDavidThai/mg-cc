import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  public jsonData = new BehaviorSubject([]);
  constructor(public http: Http) {
    this.basicGetRequest(undefined)
  }

  basicGetRequest(site){
    site = site || 'https://www.reddit.com/.json'
    this.http.get(site).subscribe(function(result){
      result.map
      this.jsonData.next(result.json().data.children) 
      console.log(result.json().data.children)
    }.bind(this))
  }
}
