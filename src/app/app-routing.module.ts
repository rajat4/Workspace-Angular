import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { Page3Component } from './Pages/page3/page3.component';

import { SubmitComponent } from './Components/submit/submit.component';
import { CancelComponent } from './Components/cancel/cancel.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  // { path: '', redirectTo: FormComponent}
  { path: 'submit', component: SubmitComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }, 
  { path: 'form', component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
