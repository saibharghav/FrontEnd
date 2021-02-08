import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

   baseUrl='http://localhost:8080/';
  constructor( private myhttp:HttpClient) {}

public checkStatus(appId:any): Observable<any>{
  // http://localhost:8087/checkStatus/1
  return this.myhttp.get(this.baseUrl+"checkStatus/"+appId,{responseType: "text"});
   }

   public getBalance(appId:any):Observable<any>{
     return this.myhttp.get(this.baseUrl+"getBalance/"+appId,{responseType: "text"});
   }
}
