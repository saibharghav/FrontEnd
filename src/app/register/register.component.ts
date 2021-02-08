import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private registerService: RegisterServiceService) { }
  CustomerForm : FormGroup;
  ngOnInit() {
  
  this.CustomerForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    middleName:new FormControl(''),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    mobileNumber:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    pinCode:new FormControl('',Validators.required),
    toe:new FormControl('',Validators.required)
  });
  }

  onSubmit()
  {
    console.log(this.CustomerForm.value);
    this.registerService.addCustomer(this.CustomerForm.value).subscribe((data: string) =>{
      alert(data);
      console.log(data);
    });
  }

  onClick()
  {
    if(this.CustomerForm.get("password").value!=(<HTMLInputElement>document.getElementById("ConformPassword")).value)
    {
      alert("Passwords doesn't match");
    }
  }
}
