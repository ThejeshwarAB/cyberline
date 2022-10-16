import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen01Component } from './../screens/screen01/screen01.component';
import { Screen02Component } from './../screens/screen02/screen02.component';
import { Screen03Component } from './../screens/screen03/screen03.component';

const routes: Routes = [
  {path:"", redirectTo: "screen-01", pathMatch: 'full'},
  {path:"screen-01", component: Screen01Component},
  {path:"screen-02", component: Screen02Component},
  {path:"screen-03", component: Screen03Component},
];

@NgModule({
  declarations: [Screen01Component,Screen02Component,Screen03Component],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
