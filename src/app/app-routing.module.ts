import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { NavBarComponent } from './small-components/nav-bar/nav-bar.component';


const routes: Routes = [
  { path:"",component:LoginComponent },
  {path:"home",component:NavBarComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
