import { Component, OnInit, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() title: string;
  @Output() onClick = new EventEmitter<string>();

  constructor(private service: AppService) { }

  ngOnInit() {
    console.log(this.service.getDatos());
    this.service.setDatos("nuevo valor");
    console.log(this.service.getDatos());
    this.service.setDatos("nuevo valor 2");
    console.log(this.service.getDatos());

    this.service.$obs.subscribe((value) => {
      console.log(value);
    });
  }

  public buttonWasClicked() {
    this.onClick.emit("button was clicked");
  } 

}
