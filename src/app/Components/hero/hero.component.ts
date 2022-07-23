import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { forbiddenEmailValidator } from 'src/app/shared/email.validator';
import { AbstractControl } from "@angular/forms";
// import { React, useState } from 'react';
// import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
// import { stringify } from 'querystring';

const Signup = () => {
  // const  [user, setUser] = useState;
}

export function forbiddenEmailValidator(control: AbstractControl): {[key: string]: any} | null {
    const forbidden = /capgemini/.test(control.value);
    return forbidden ? { 'forbiddenEmail': {value: control.value}} : null;
}
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss',]
})
export class HeroComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl(''),
    email: new FormControl('', Validators.email)
  });

  heroForm = new FormGroup ({

    name: new FormControl('', Validators.required),
    street: new FormControl('76 Downing Street'),
    city: new FormControl('Navi Mumbai', Validators.required),  
    states: new FormControl('Maharashtra', Validators.required) ,
    email: new FormControl('rajat.thawal@volksbank.nl', Validators.email),
    power: new FormControl('power'),
    zip: new FormControl('zip'),
    emailDomain: new FormControl('')
});

  zip = 400302;
  forbiddenEmail: any;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: any;
  userForm: FormGroup;
  state = 'Maharashtra';
  states = ['CA', 'MD', 'OH', 'VA'];
  states1 = ['Maharashtra', 'Karnataka'];
  sidekick: FormControl | undefined;
  validateForm : FormGroup | undefined;

  checkIfA: ValidatorFn | null | undefined;
  

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              ) { 
                
                email: AbstractControl;
                this.userForm = new FormGroup({
                  UserFirstName: new FormControl(),
                  UserLastName: new FormControl()

               },
               
               this.validateForm = fb.group({

                'firstName' : [null, Validators.required],
          
                'email':[null, Validators.required,     Validators.compose([this.checkIfA])]
          
              }),
              // email: AbstractControl | undefined;
              // this.email = this.validateForm.controls['email'];
               
               );
    this.createForm();
    user: "abc";
  }
  loginUser(){
    console.warn(this.loginForm.value);
  }

  heroLoginUser(){
    console.warn(this.heroForm.value);
  }
  get user(){
    return this.loginForm.get('user')
  }
  get email(){
    return this.loginForm.get('email')
  }

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + '/company');
    }
  ngOnInit(): void {
  }

  fullname = new FormGroup({n: new FormControl});

  loginForm1 = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl(''),
    email: new FormControl('', Validators.email)
  });

  heroForm1 = new FormGroup ({

      name: new FormControl('', Validators.required),
      street: new FormControl('76 Downing Street'),
      city: new FormControl('Navi Mumbai', Validators.required),  
      states: new FormControl('Maharashtra', Validators.required) ,
      email: new FormControl('rajat.thawal@volksbank.nl', Validators.email),
      power: new FormControl('power'),
      zip: new FormControl('zip'),
      emailDomain: new FormControl('')
  });

  // getName 
  get Email(){
    return this.heroForm.get('email');
    }
  
    get Name(){
    return this.heroForm.get('name');
    }

  createForm() {
    this.heroForm = this.fb.group({
      name: new FormControl('', Validators.required) ,
      street: new FormControl(''),
      city: new FormControl('', Validators.required),  
      states: new FormControl('states', Validators.required) ,
      email: new FormControl('', [Validators.email, forbiddenEmailValidator]),
      power: new FormControl('power'),
      zip: new FormControl('')
      
    });
  }
  submitForm(){
    console.log("Fill up allllll the details");
    alert("Fill Up The form");
  }

  goHome(){
    this.router.navigateByUrl("/home");
  }

  welcome(){
    this.router.navigateByUrl("/welcome");
  }
  // Info(){
  //   this.router.navigateByUrl('Info')
  // }
  // function checkName(name: String){
  //   if(name==admin){
  //     return "name cannot be getAttrsForDirectiveMatching";
  //   }
  // }

  
}
var emailDomain = "capgemini";
// check_mail(){
//   if (email = nitesh@capgemini.com)
//   return true;
// }
// function check_mail(String email) {
  
//   email: stringify;
//   if(email == (nitesh@capgemini.com))
//   return true;
  // throw new Error('Function not implemented.');
// }
var str = "The MEAN stack is MongoDB, Express.js, AngularJS, and Node.js";
str.indexOf('MongoDB') !== -1 // true
str.indexOf('Java') !== -1 //false
str.indexOf('Node', 5) !== -1 //true
console.log(str);


// var originalvalue = <HTMLInputElement>document.getElementById("getName").value;

