import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { FeedBodyComponent } from './feed-container/feed-body/feed-body.component';
import { FeedToolbarComponent } from './feed-container/feed-toolbar/feed-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedContainerComponent,
    FeedBodyComponent,
    FeedToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
