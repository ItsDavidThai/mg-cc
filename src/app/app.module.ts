// ng Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";

// Components 
import { AppComponent } from './app.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { FeedBodyComponent } from './feed-container/feed-body/feed-body.component';
import { FeedToolbarComponent } from './feed-container/feed-toolbar/feed-toolbar.component';

// Services
import { ApiService } from './api.service';
import { ToolbarService } from './toolbar.service';
import { FeedBodyItemComponent } from './feed-container/feed-body-item/feed-body-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedContainerComponent,
    FeedBodyComponent,
    FeedToolbarComponent,
    FeedBodyItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
