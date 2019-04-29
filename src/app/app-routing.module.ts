import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'page-one', component: Page1Component },
  { path: 'page-two', component: Page2Component },
  { path: '**', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
