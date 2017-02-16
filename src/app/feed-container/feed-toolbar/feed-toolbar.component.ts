import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { ToolbarService } from '../../toolbar.service'

@Component({
  selector: 'app-feed-toolbar',
  templateUrl: './feed-toolbar.component.html',
  styleUrls: ['./feed-toolbar.component.css']
})
export class FeedToolbarComponent implements OnInit {

  public form: FormGroup;
  
  constructor(public apiService: ApiService, fb: FormBuilder, public toolbarService: ToolbarService) {
      this.form = fb.group({
         "subreddit":["", Validators.required],
        //  "postHint":["", Validators.required],
         "brandSafe":[false]
      })
   }
  onFilterSubmit(e){
    e.preventDefault();
    this.toolbarService.subredditFilter.next(this.form.value.subreddit.toLowerCase())
  }
  sortByDateClicked(){
    this.toolbarService.sortByDate.next(true)
  }
  sortByScoreClicked(){
    this.toolbarService.sortByScore.next(true)
  }
  changeSortOrder(e){
    this.toolbarService.sortOrder = e.target.checked
  }
  reset(){
    this.toolbarService.reset.next(true)
  }
  ngOnInit() {
  }

}
