import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  @Input() commentFromParent:any; // its come from App compenent???
  reply :any;
  @Output() replyToParent1 = new EventEmitter<any>();
  ngOnInit(): void {
    
  }
  submit(){
    this.replyToParent1.emit(this.reply)
  }
}
