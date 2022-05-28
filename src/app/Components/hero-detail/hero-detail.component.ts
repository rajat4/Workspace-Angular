import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  
 states = ['CA', 'MD', 'OH', 'VA'];
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  heroForm = new FormGroup ({
    name: new FormControl()
  });

  
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ] 
    });
  }
}
