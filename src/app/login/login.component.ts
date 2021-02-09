import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static emailId(): string {
    throw new Error('Method not implemented.');
  }

  //formGroup
  form=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  
  constructor(private service:RegisterServiceService,private router:Router) { 
    
  }
  customer :Customer  
  customer1:Customer
  public email:string;
  ngOnInit(): void {
    this.customer=new Customer();
    this.customer1=new Customer();
  }

   onSubmit()
  {
    console.log(this.customer.email);
    console.log("Login");
    this.email=this.customer.email;
      this.service.validateCustomer(this.customer).subscribe((data) =>{
        if(data!=null)
          {
          this.customer1=data;
          sessionStorage.setItem("email",this.email);
          if(this.customer1.email==this.customer.email &&this.customer1.password==this.customer.password)
          {
            
            // alert("Login Successful");
            this.router.navigate(['/loginpage'])
          }
          
        }
        else
          {
            alert("Invalid Credentials");
          }
      },
        (err)=>{
          console.log(err);
        }
          
        
      )
  }


 myLoginPicture:string="./assets/images/LoginPicture.jpg";




}