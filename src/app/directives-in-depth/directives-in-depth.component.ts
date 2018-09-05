import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-in-depth',
  templateUrl: './directives-in-depth.component.html',
  styleUrls: ['./directives-in-depth.component.scss']
})
export class DirectivesInDepthComponent implements OnInit {

  hero = {
    name: 'name'
  }
  constructor() { }

  ngOnInit() {
  }

}
