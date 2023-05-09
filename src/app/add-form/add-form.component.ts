import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import {LoggerService} from '../logger/logger.service'
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  ShowForm:boolean=false
  manager: boolean=false;
  company:string=''
  employee:string=''
  dept:string=''
  salary:BigInteger | undefined
  status:boolean=false
  errors:string=''
  @Output() onFormSubmit:EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    
  }
  constructor(private loggerService : LoggerService){}
  onSubmit(){
    if (this.company=='' || this.employee=='' || this.dept=='' || !this.salary){
      this.errors="All Fields Are required"
    }
    else{
      try {
        const formdata= {
          'company':this.company,
          'employee':this.employee,
          'dept':this.dept,
          'salary':this.salary,
          'manager':this.manager,
          'status':this.status
          }
          console.log(formdata)
        this.loggerService.createData(formdata).subscribe((value)=>{this.onFormSubmit.emit(value)})
      } catch (error) {
        console.log(error)
        this.errors = 'Unknown Error Please check form Again'
      }
    }
   
  }
  toggleActive(){
    this.status = !this.status
  }
  showForm(){
    this.ShowForm = !this.ShowForm
  }
}
