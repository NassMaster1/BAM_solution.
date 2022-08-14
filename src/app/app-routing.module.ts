import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ExpertiseComponent} from "./pages/expertise/expertise.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

const routes: Routes = [
  {path:'qui_suis_je',component:AboutComponent},
  {path:'expertise',component:ExpertiseComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
