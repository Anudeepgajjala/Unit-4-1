import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPage1Component } from './test-page1/test-page1.component';
import { TestPage2Component } from './test-page2/test-page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: TestPage1Component },
  { path: 'page2', component: TestPage2Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
