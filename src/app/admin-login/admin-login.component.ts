import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
admin:Admin;

  //form validation formGroup
  Aform=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
  })
  constructor(private router:Router) { 
    this.admin=new Admin();
  }

  onSubmit()
  {
    console.log(this.admin.adminemail);
    console.log(this.admin.adminpass);
      if(this.admin.adminemail =="admin1@gmail.com" && this.admin.adminpass=="password1")
      {
        alert("Login Successful");
        this.router.navigate(['/admin-dashboard'])
      }
      else
      {
        alert("Invalid");
      }
  }
  ngOnInit(): void {
  }
}
