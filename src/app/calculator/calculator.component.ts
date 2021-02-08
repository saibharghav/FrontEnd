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
  bool:boolean=false;
  currentVal=0;
  currentStatus="Not eligible";
  onEMI(lo,te,ro)
  {
    this.bool=true
    this.currentVal=1;
    ro=ro/(100*12);
    var a=ro+1;
    var b=a;
    for(let i=0;i<te*12;i++)
    {
      b=b*a;
    }
    this.currentVal=lo*b*ro;
    this.currentVal=this.currentVal/(b-1);
    this.currentVal=Math.round(this.currentVal);
  
  }

}
