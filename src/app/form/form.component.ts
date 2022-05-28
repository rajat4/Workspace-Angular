import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }

  public isBtnClicked: boolean = false;

  ngOnInit(): void {
  }

  reload(){
    this.router.navigateByUrl('/');
  }

  submit(){
    this.router.navigateByUrl('submit');
    this.isBtnClicked = true;
  }

  cancel(){
    this.router.navigateByUrl('cancel');
    this.isBtnClicked = true;
  }

  page1(){
    this.router.navigateByUrl('page1');
    this.isBtnClicked = true;
  }

  page2(){
    this.router.navigateByUrl('page2');
    this.isBtnClicked = true;
  }

  page3(){
    this.router.navigateByUrl('page3');
    this.isBtnClicked = true;
  }

 
}
