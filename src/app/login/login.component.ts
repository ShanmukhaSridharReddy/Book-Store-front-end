import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host:{
    class : 'app-login'
  },
  encapsulation : ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  showSignup:boolean=false;
  showLogin:boolean=true;
  loginForm!: FormGroup;
  signUpForm! : FormGroup
  
  constructor(public formBuilder:FormBuilder,public userService:UserService,public router:Router) { }

  ngOnInit(): void 
  {
      this.signUpForm = this.formBuilder.group({
        userName:[''],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
        phoneNo:['',[Validators.required,Validators.minLength(10)]]
      })


    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  showLoginForm()
  {
    this.showLogin=!this.showLogin;
    this.showSignup=!this.showSignup;
  }
  showSignupForm()
  {
    this.showSignup = !this.showSignup;
    this.showLogin = !this.showLogin;
  }

  loginClick(){
   
    const {email,password}=this.loginForm.value

    this.userService.login({email,password}).subscribe(
      res =>{
        console.log(res)
        localStorage.setItem('token',res.data)
        //this.router.navigate(["/dashboard/notes"])
        console.log(localStorage.getItem('token'));
        
      }
      
    )
  }
  signupClick(){
    const {userName , email, password, phoneNo} = this.signUpForm.value
    this.userService.signup({userName,email,password,phoneNo}).subscribe(
      res => {
        console.log(res)

      }
    )
  }
 
}
