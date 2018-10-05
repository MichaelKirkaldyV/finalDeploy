import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';



const routes: Routes = [

	{path: '', component: AppComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
