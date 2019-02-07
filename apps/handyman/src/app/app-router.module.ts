import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: '<some>', component: <some>Component },
//   { path: '**', redirectTo: '', pathMatch: 'full' }
// ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
