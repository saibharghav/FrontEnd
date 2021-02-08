import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerApplicationDTO } from '../CustomerApplicationDTO';
import { LoginComponent } from '../login/login.component';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-applicationn',
  templateUrl: './applicationn.component.html',
  styleUrls: ['./applicationn.component.css']
})
export class ApplicationnComponent implements OnInit {

 message:any
  constructor(private service:RegisterServiceService,private router:Router) { }
  customerApplicationDTO!:CustomerApplicationDTO;
  ngOnInit(): void {
  this.customerApplicationDTO=new CustomerApplicationDTO;
  
  }
  applyNow(){
    console.log("apply now method");
    console.log(this.customerApplicationDTO);
    this.customerApplicationDTO.email=sessionStorage.getItem("email");

    this.service.ApplicationForm(this.customerApplicationDTO).subscribe((data)=>{
      alert("Application submitted successfully\nApplication ID  is : "+data);
      // if(data!=null){
      // }else alert("no App.")
    });
    this.router.navigate(['/loginpage']);
  }
}
