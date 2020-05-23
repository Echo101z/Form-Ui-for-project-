import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { NavBarComponent } from './small-components/nav-bar/nav-bar.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  { path:"",component:LoginComponent},
  {path:"home",component:NavBarComponent,canActivate:[AuthGuardService] }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
