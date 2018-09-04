import { Routes } from "@angular/router";
import { FirtsComponent } from "./firts/firts.component";
import { SecondComponent } from "./second/second.component";

export const appRoutes: Routes = [
  { path: 'first', component: FirtsComponent },
  { path: 'second/:id', component: SecondComponent },
];