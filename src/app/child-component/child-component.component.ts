import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() title: string;
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public buttonWasClicked() {
    this.onClick.emit("button was clicked");
  } 

}
