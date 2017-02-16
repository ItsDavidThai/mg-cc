import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ToolbarService } from '../../toolbar.service';

@Component({
  selector: 'app-feed-body',
  templateUrl: './feed-body.component.html',
  styleUrls: ['./feed-body.component.css']
})
export class FeedBodyComponent implements OnInit {
  public rowData;
  public subredditFilter;
  constructor(public apiService: ApiService, public toolbarService: ToolbarService) { 
    this.apiService.jsonData.subscribe(function(result){
      this.rowData = result

    }.bind(this))
    this.toolbarService.subredditFilter.subscribe(function(res){
      this.subredditFilter = res
      console.log(this)
      this.rowData = this.rowData.filter(function(item){
        return item.data.subreddit.toLowerCase().includes(this.subredditFilter)
      }.bind(this))
    }.bind(this))

    this.toolbarService.sortByDate.subscribe(function(res){
        this.sortBy('created')
    }.bind(this))

    this.toolbarService.sortByScore.subscribe(function(res){
      this.sortBy('score')
    }.bind(this))

    this.toolbarService.reset.subscribe(function(res){
      this.rowData = this.apiService.jsonData.getValue().sort()
    }.bind(this))
    

  }
  
  sortBy(type){

    if(!this.toolbarService.sortOrder){
      this.rowData = this.rowData.sort(function(a, b){
        return a.data[type] > b.data[type] ? 1 : -1
      })
    } else {
      this.rowData = this.rowData.sort(function(a, b){
        return a.data[type] < b.data[type] ? 1 : -1
      })
    }
  }

  ngOnInit() {
  }

}
