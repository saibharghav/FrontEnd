import { Injectable } from '@angular/core';
import {Customer} from 'src/app/Customer';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservableLike} from 'rxjs';
import { CustomerApplicationDTO } from './CustomerApplicationDTO';
import { ApplicationsDTO } from './ApplicationsDTO';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private myhttp: HttpClient) { }

  baseUrl:string = 'http://localhost:8080/';

  addCustomer(customer:Customer):Observable<any>
  {
    return this.myhttp.post<Customer>(this.baseUrl+"addCustomer",customer);
  }

  validateCustomer(customer:Customer):Observable<Customer>
  {
    return this.myhttp.post<Customer>(this.baseUrl+"loginTest",customer);
  }

  public ApplicationForm(customerApplicationDTO:CustomerApplicationDTO){
    console.log("In service method");
    console.log(customerApplicationDTO);
    return this.myhttp.post(this.baseUrl+"AddApplication/",customerApplicationDTO);
  }

  public getApplications() :Observable<ApplicationsDTO[]>
  {
    return this.myhttp.get<ApplicationsDTO[]>(this.baseUrl+"allApplications/");
  }

  public rejectStatus(id:number):Observable<any>
  {
    return this.myhttp.put<any>(this.baseUrl+"rejectStatus/",id);
  }

  public approveStatus(id:number) :Observable<any>
  {
    alert("In approve status")
    return this.myhttp.put<any>(this.baseUrl+"approveStatus/",id)
  }
}
