import { Injectable } from '@angular/core';
import {  AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  issignin=false;
  constructor(public auth:AngularFireAuth,public router:Router) {
   
    this.auth.user.subscribe(res=>{
    //  console.log(res);
      if(res.uid!=null){
        this.issignin=true;
        this.router.navigateByUrl("home");
      }else{
        this.issignin=false;
        this.router.navigateByUrl("");
      }
    })
    
    
  
   }



signup(email,pass){
 this.auth.createUserWithEmailAndPassword(email,pass).then(res=>{
   this.router.navigateByUrl("home");
   
 }).catch(data=>{
   alert("Invalid Credentials")
 })

}

login(email,pass){
  this.auth.signInWithEmailAndPassword(email,pass).then(res=>{
   this.issignin=true;
    this.router.navigateByUrl("home");

  }).catch(res=>{
    alert(res.message);
    this.router.navigateByUrl("");
  })
}

logout(){
  this.issignin=false;
  this.auth.signOut().then(res=>{
    this.router.navigateByUrl("");
  })

}

}



