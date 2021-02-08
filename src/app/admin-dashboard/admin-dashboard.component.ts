import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 applications:any
  constructor(private service:RegisterServiceService) { }
var:any;
  var1:any;
  ngOnInit(): void {
  }
  onClick(id:number)
  {
    this.var= (<HTMLInputElement>document.getElementById("selectedOption")).value
    alert(this.var);
    if(this.var=="APPROVE")
    {
      alert("In approve");
      let response=this.service.approveStatus(id);
      response.subscribe((data)=>this.var1=data);
    }
    else
    {
      let response=this.service.rejectStatus(id);
      response.subscribe((data)=>this.var1=data);
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
