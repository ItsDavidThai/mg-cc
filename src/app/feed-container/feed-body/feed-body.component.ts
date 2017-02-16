import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ToolbarService } from '../../toolbar.service';
/*
  feed-body renders the table of information
*/
@Component({
  selector: 'app-feed-body',
  templateUrl: './feed-body.component.html',
  styleUrls: ['./feed-body.component.css']
})
export class FeedBodyComponent {
  // used to render table data
  public rowData;
  // hold the subreddit filter phrase
  public subredditFilter;
  constructor(public apiService: ApiService, public toolbarService: ToolbarService) { 
    // use apiService http get request and then set rowData to the response json 
    this.apiService.jsonData.subscribe(function(result) {
      this.rowData = result;
    }.bind(this))
    // subscribe to subredditFilter observable and trigger when user submits a search filter
    this.toolbarService.subredditFilter.subscribe(function(res) {
      this.subredditFilter = res;
      this.rowData = this.rowData.filter(function(item) {
        return item.data.subreddit.toLowerCase().includes(this.subredditFilter)
      }.bind(this))
    }.bind(this))
    // subsribe to sortByDate observable and sort when triggered
    this.toolbarService.sortByDate.subscribe(function(res) {
        this.sortBy('created');
    }.bind(this))
    // subscribe to sortByScore observable and sort when triggered
    this.toolbarService.sortByScore.subscribe(function(res) {
      this.sortBy('score');
    }.bind(this))
    // subscribe to reset observable and reset filter when triggered
    this.toolbarService.reset.subscribe(function(res){
      this.rowData = this.apiService.jsonData.getValue().sort();
    }.bind(this))
  }
  /*
    sorting function 
    type: string- pass in sort category
  */
  sortBy(type) {
    // if true sort by biggest, if false sort by smallest
    if(!this.toolbarService.sortOrder) {
      this.rowData = this.rowData.sort(function(a, b) {
        return a.data[type] > b.data[type] ? 1 : -1
      })
    } else {
      this.rowData = this.rowData.sort(function(a, b) {
        return a.data[type] < b.data[type] ? 1 : -1
      })
    }
  }
}
