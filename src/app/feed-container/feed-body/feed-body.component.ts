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
        console.log(item, 'inside rowdata update')
        return item.data.subreddit.includes(this.subredditFilter)
      }.bind(this))
    }.bind(this))
  }

  ngOnInit() {
  }

}
