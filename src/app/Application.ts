import { Loan } from "./Loan"
import { Tracker } from "./Tracker"

export class Application{
    aadhar:string
    aadharno:string
    agreement:string
    appToe:string
    dob:Date
    empName:string
    estAmt:number
    gender:string
    loa :string
    nationality:string
    noc:string
    org:string
    pan:string
    panno:string
    proLoc:string
    proName:string
    retirAge:string
    salarySlp:string
    voter:string
    loans:Loan[]
    tracker:Tracker

}