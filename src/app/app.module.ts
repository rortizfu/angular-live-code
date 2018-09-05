import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';
import { AppService } from './app.service';
import { FirtsComponent } from './firts/firts.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routings';
import { DirectivesInDepthComponent } from './directives-in-depth/directives-in-depth.component';
import { HighLightDirective } from './directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    FirtsComponent,
    SecondComponent,
    DirectivesInDepthComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  flag: boolean;
}