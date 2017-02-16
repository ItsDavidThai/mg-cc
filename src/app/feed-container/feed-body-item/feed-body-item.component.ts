import { Component, Input } from '@angular/core';
/*
  Table Row Item Directive
*/
@Component({
  selector: '[app-feed-body-item]',
  templateUrl: './feed-body-item.component.html',
  styleUrls: ['./feed-body-item.component.css']
})
export class FeedBodyItemComponent {
  // for parent->child communication
  @Input() subreddit;
  @Input() createdAt;
  @Input() score;

  constructor() {} 
}
