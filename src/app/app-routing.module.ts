import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'my-work/:id',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
