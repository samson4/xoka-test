import { Component,OnInit } from '@angular/core';
import { LoggerService } from './logger/logger.service';
import { Task } from './Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  data:Task[] = [];
  id:number=0
  company:string=''
  dept:string=''
  employee:string=''
  salary:number=0
  status:boolean=false

  
  
  // loggerService = LoggerService
  constructor(private loggerService : LoggerService){

  }
  ngOnInit(): void {
    this.loggerService.fetchData().subscribe(data=>this.data=data)
  }
  addFormData(value:any){
    // this.data.push(value)
    location.reload()
  }
  updateEmployee(){
    const formdata = {
      "id":this.id,
      "company":this.company,
      "employee":this.employee,
      "dept":this.dept,
      "salary":this.salary,
      "status":this.status
    }
    this.loggerService.updateEmployeeData(formdata).subscribe((value)=>{
      location.reload()
      alert('Employee updated')
    })
  }
  updateFormData(emp:any){
    this.id = emp.id
    this.company=emp.company
    this.dept=emp.dept
    this.employee=emp.employee
    this.salary=emp.salary
    this.status = emp.status
  }
}

