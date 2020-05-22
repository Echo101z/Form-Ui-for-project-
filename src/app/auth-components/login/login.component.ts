import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signup=true;
login=false;
user:{email:string,password:string}={email:"",password:""}
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }



change(c){
  if(c==='log'){
    this.signup=false;
    this.login=true;
  }else{
    this.signup=true;
    this.login=false;
  }
 
}

authsignup(user){
  if(user.email!==""&&user.password!==""&&user.password.length>6){

    this.auth.signup(user.email,user.password);
  }else{
    alert("invalid entry : ")
  }

}

authlogin(user){
  if(user.email!==""&&user.password!==""&&user.password.length>6){
    this.auth.login(user.email,user.password);

  }else{
    alert("invalid entry : ")
  }
}




}