import { Component, ViewChild, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck }                from '@angular/core';
import { CountdownTimerComponent }  from '../countdown-timer/countdown-timer.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
  <button (click)="informParent()">Inform parent</button>
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `
})
export class CountdownLocalVarParentComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecke");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("nngAfterViewChecke");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
@ViewChild(CountdownTimerComponent) timer: CountdownTimerComponent;
  
  constructor(private service: AppService) {

  }
  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck()")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit()");
  }

  public informParent() {
    this.service.inform("nuevo valor para observable");
  }
}