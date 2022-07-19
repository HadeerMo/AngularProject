import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"portofolio",component:PORTFOLIOComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
