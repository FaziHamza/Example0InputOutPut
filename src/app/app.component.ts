import { Component, OnInit } from '@angular/core';
import { withComponentInputBinding } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example';
  commentToChild: any;
  replyFromChild: any;
  comment: any;
  ngOnInit(): void {
  }
  Submit() {
    this.commentToChild = this.comment;
  }
  getReply(data: any) {
    this.replyFromChild = data;
  }
}
