import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitComponent } from './Components/submit/submit.component';
import { CancelComponent } from './Components/cancel/cancel.component';

import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { Page3Component } from './Pages/page3/page3.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubmitComponent,
    CancelComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    CustomerComponent,
    HeroDetailComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
