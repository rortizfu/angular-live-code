import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private router: Router, private activated: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.router);
    // console.log(this.activated);

    this.activated.params.subscribe((info) => {
      // console.log("Params: " + info);
      console.log(`Params: ${info.id}`);
    });

    console.log(`Snapshot: ${JSON.stringify(this.activated.snapshot.params)}`);
  }

  ngOnDestroy() {
    console.log("destroying");
  }

}
