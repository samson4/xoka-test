import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Task } from '../Task';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  title = 'test';
  empData:Task[] = [];
  isChecked:Boolean=false
  @Output() onFormUpdate:EventEmitter<any> = new EventEmitter()

  // loggerService = LoggerService
  constructor(private loggerService : LoggerService){

  }
  ngOnInit(): void {
    this.loggerService.fetchData().subscribe(data=>this.empData=data)
    
  }
  deleteData(task:Task){
    this.loggerService.deleteData(task).subscribe(()=>this.empData= this.empData.filter(emp=>emp.id !== task.id))
  }
  toggleStatus(emp:Task){
    this.loggerService.toggleActive(emp).subscribe()
  }
  updateEmployee(emp:any){
    this.onFormUpdate.emit(emp)
  }
  
}
