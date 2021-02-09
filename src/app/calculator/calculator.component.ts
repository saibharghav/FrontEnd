import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

constructor() { }

  ngOnInit(): void {
  }

  monthlyincome:any;
  eligibility:any;
  
  flag: boolean=false;
  

  cal()
  {
  this.eligibility=60*(0.6*this.monthlyincome);
  this.eligibility=Math.round(this.eligibility);
  this.flag=true;
  }

  handleMonthlyIncomeEvent(event){
    let val= event.target.value;
    this.monthlyincome= parseInt(val);
  }
  calemi()
  {
        this.tenure1=this.tenure*12;
        this.roi1=this.roi/(12*100);
        this.pow1=Math.pow(1+this.roi1,this.tenure1);
        //this.pow2=Math.pow(1+this.roi1,this.tenure1)-1;
        this.emi=(this.loanamount*this.roi1*this.pow1)/(this.pow1-1);
        this.emi1=Math.round(this.emi);

       this.interest=(this.emi*this.tenure1)-this.loanamount
       this.interest=Math.round(this.interest);

        this.totalAmt=this.loanamount+this.interest;
       
    this.flag=true;
  }
  loanamount:any;
  tenure:any;
  tenure1:any;
  roi: any;
  roi1: any;
  emi:any;
  emi1: any;
  pow1:any;
  pow2:any;
  monthlyincome1:any;
  eligibility1:any;
  interest:any;
  totalAmt: any;
 //flag: boolean=false;
  

 
  handleTenureEvent(event){
    let val= event.target.value;
    this.tenure= parseInt(val);
  }

  handleRoiEvent(event){
    let val= event.target.value;
    this.roi= parseFloat(val);
  }

  handleLoanEvent(event){
    let val= event.target.value;
    this.loanamount= parseInt(val);
  }

}
