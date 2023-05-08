import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import {LoggerService} from '../logger/logger.service'
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  text: string='';
  day: string='';
  reminder: boolean=false;
  @Output() onFormSubmit:EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    
  }
  constructor(private loggerService : LoggerService){}
  onSubmit(){
    const formdata= {
    'text':this.text,
    'day':this.day,
    'reminder':this.reminder
    }
    
    this.loggerService.createData(formdata).subscribe((value)=>{this.onFormSubmit.emit(value)})
    
  }

}
