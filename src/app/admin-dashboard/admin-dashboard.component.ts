import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 applications:any
  constructor(private service:RegisterServiceService,private fb:FormBuilder) { }
  states = ["Maharashtra", "Madhya Pradesh", "Karnataka", "Uttar Pradesh"];
var:any;
var1:any;
  opts=["APPROVE","REJECT"];
  statusValidate:FormGroup;
  ngOnInit(){
      this.statusValidate=this.fb.group({
      var1:['APPROVE']
    });
  }
  number=47;
numbers=[45,46,47]
var2:any



  onClick(id:number,stat:string)
  {
    // this.var= (<HTMLInputElement>document.getElementById("selectedOption")).value
    this.var1=stat;
    alert(this.var1)
    if(this.var1=="APPROVE")
    {
      alert("In approve");
      this.var2="Approve"
      let response=this.service.approveStatus(id);
      response.subscribe((data)=>{
          console.log("data :"+ data);
        });
    }
    else
    {
      alert("In reject")
      let response=this.service.rejectStatus(id);
      response.subscribe((data)=>{
        console.log("data :"+ data);
      });
    }
  }
  detailsOfAll:boolean=false;
  onSubmit()
  {
    if(this.detailsOfAll)
    {
      this.detailsOfAll=false;
    }
    else
    {
      this.detailsOfAll=true;
      let response=this.service.getApplications();
      response.subscribe((data)=>this.applications=data);
      console.log(this.applications)
    }
  }
}
