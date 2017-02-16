import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToolbarService } from '../../toolbar.service';
/*
  feed-toolbar is a component that displays the toolbar for the feed
*/
@Component({
  selector: 'app-feed-toolbar',
  templateUrl: './feed-toolbar.component.html',
  styleUrls: ['./feed-toolbar.component.css']
})
export class FeedToolbarComponent {
  // form group is used for angular 2 model driven forms
  public form: FormGroup;
  
  constructor(public apiService: ApiService, fb: FormBuilder, public toolbarService: ToolbarService) {
      // form defaults and settings
      this.form = fb.group({
         "subreddit":["", Validators.required],
      })
  }
  onFilterSubmit(e){
    e.preventDefault();
    this.toolbarService.subredditFilter.next(this.form.value.subreddit.toLowerCase());
  }
  sortByDateClicked(){
    this.toolbarService.sortByDate.next(true);
  }
  sortByScoreClicked(){
    this.toolbarService.sortByScore.next(true);
  }
  changeSortOrder(e){
    this.toolbarService.sortOrder = e.target.checked;
  }
  resetClicked(){
    this.toolbarService.reset.next(true);
  }
}
