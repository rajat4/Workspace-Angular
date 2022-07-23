import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { Page3Component } from './Pages/page3/page3.component';

import { SubmitComponent } from './Components/submit/submit.component';
import { CancelComponent } from './Components/cancel/cancel.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  // { path: '', redirectTo: FormComponent}
  { path: 'submit', component: SubmitComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }, 
  { path: 'form', component: FormComponent },
  { path: 'Info', component: FormComponent },
  { path: 'home', component: HomeComponent},
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
