import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-feed-body-item]',
  templateUrl: './feed-body-item.component.html',
  styleUrls: ['./feed-body-item.component.css']
})
export class FeedBodyItemComponent implements OnInit {
  @Input() subreddit;
  @Input() createdAt;
  @Input() score;
  @Input() brandSafe;
  @Input() postHint;

  constructor() { }

  ngOnInit() {
  }

}
