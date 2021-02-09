import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-loantracker',
  templateUrl: './loantracker.component.html',
  styleUrls: ['./loantracker.component.css']
})
export class LoantrackerComponent implements OnInit {

  app_id:number;
status:string;
Bapp_id:number;
Bstatus:string;
flag: boolean=false;
//tracker1:new Tracker();
  constructor(private trackerService:TrackerService) { }

  ngOnInit(): void {

      }

    Submit(){
    this.trackerService.checkStatus(this.app_id).subscribe((data)=>{
      if(data!=null){
    
        if(data===""){
          this.status="Invalid Application Id";
        }
        else{
          if(data=="Approved")
          {
            this.status=data+". Your Account Number is "+this.app_id
          }
          else
          {
            this.status=data;
          }
        }
      } else{
        alert("Invalid Application ID ");
      }   
    });

    }


    Submit2(){
    alert("In submit");
      this.trackerService.getBalance(this.Bapp_id).subscribe((data)=>{
        if(data!=null)
        {
          if(data=="")
          {
            this.Bstatus="Invalid Account Id";
          }
          else{this.Bstatus=data;}
        } else{
          alert("Invalid Account ID ");
        }
        this.flag=true;   
      });
    }

}
