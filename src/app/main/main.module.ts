import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: 'posts', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
