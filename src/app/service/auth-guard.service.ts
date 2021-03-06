import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { AsyncSubject } from 'rxjs';
//import { Route } from '@angular/compiler/src/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth:AuthService,public router:Router) { }


  canActivate():boolean{
  if(this.auth.issignin){
    return true;
  }
  else{
    this.router.navigateByUrl("");
    return false;
  }

  }


}
