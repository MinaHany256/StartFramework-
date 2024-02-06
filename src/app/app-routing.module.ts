import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartframeworkComponent } from './startframework/startframework.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'/startFramework',pathMatch:'full'},
  {path:'startFramework',component:StartframeworkComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
