import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  private url1: string = "src/app/Components/hero-detail/email.json";
  private url2: string = "/assets/db.json"

  constructor(private http: HttpClient) { }

 getEmployees1(): Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this.url1)
 }

 getEmployees2() {
  return this.http.get<IEmployee[]>(this.url2)
}
 
}
