import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';
import { CustomerApplicationDTO } from '../CustomerApplicationDTO';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {
  customerApplicationDTO:FormGroup
  constructor(private registerService: RegisterServiceService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.customerApplicationDTO=new FormGroup({
      customer: new FormGroup({
        email:new FormControl('',Validators.required)
      }),
      application:new FormGroup({
        proLoc:new FormControl('',Validators.required),
        proName:new FormControl('',Validators.required),
        estAmt:new FormControl('',Validators.required),
        toe:new FormControl('',Validators.required),
        retirAge:new FormControl('',Validators.required),
        org:new FormControl('',Validators.required),
        empName:new FormControl('',Validators.required),
        dob:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        aadharno:new FormControl('',Validators.required),
        nationality:new FormControl('',Validators.required),
        panno:new FormControl('',Validators.required),
        loans:this.formBuilder.group({
          maxLoanamt:new FormControl(''),
          loanAmt:new FormControl('',Validators.required),
          roi:new FormControl(''),
          tenure:new FormControl('',Validators.required)
        }),
        tracker:new FormGroup({
          status:new FormControl('Pending')
        })
      })
    })
  }
  check:boolean=true;
  onClick()
  {
    this.check=false;
  }

  onSubmit()
  {
    console.log(this.customerApplicationDTO.value);
  }

}

// onSubmit(){
//     this.customerservice.addCustomer(this.customer).subscribe(data =>{
//       console.log(data);
//       console.log("post data");
//     });
//     console.log(this.customer);
//     alert("Done");