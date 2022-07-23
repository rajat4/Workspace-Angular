import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { S1Service } from 'src/app/s1.service';

@Component({
  selector: 'app-hero-detail', 
  templateUrl: './hero-detail.component.html', 
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // exform: FormGroup;
  // name: new FormControl('',[Validators.required]),
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/company';
  posts: any;
  // city: new FormControl(null, Validators.required);
  state = 'Maharashtra';
  states = ['CA', 'MD', 'OH', 'VA'];
  states1 = ['Maharashtra', 'Karnataka'];
  public employees = [];

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private s1: S1Service
              ) { 
    this.createForm();
    user: "abc";
  }
  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + '/posts');
    }

    // import getEmployees1(){

    // }

  ngOnInit(): void {
    // this.s1.getEmployees1().subscribe(data => this.employees = data);
  }
  heroForm = new FormGroup ({
    // name: new FormControl()
      name: new FormControl('', Validators.required),
      street: new FormControl(''),
      city: new FormControl('', Validators.required),  
      states: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      // power: new FormControl(''),
      zip: new FormControl('')
  });

  
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ] 
      // name: new FormControl(null, Validators.required),
      // street: new FormControl(null),
      // city: new FormControl(null, Validators.required),
    });
  }

//  states = ['CA', 'MD', 'OH', 'VA'];

  
}
// states = ['CA', 'MD', 'OH', 'VA'];

// var name: FormControl;
