import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

/*
  ApiService contains http/api related functions
*/
@Injectable()
export class ApiService {
  public jsonData = new BehaviorSubject([]);
  constructor(public http: Http) {
    this.basicGetRequest(undefined);
  }
  /*
    site: string- url of website/api
    if no argument or undefined defaults to reddit api
  */ 
  basicGetRequest(site) {
    site = site || 'https://www.reddit.com/.json';
    this.http.get(site).subscribe(function(result) {
      this.jsonData.next(result.json().data.children);
    }.bind(this))
  }
}
