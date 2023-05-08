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
  
  // loggerService = LoggerService
  constructor(private loggerService : LoggerService){

  }
  ngOnInit(): void {
    this.loggerService.fetchData().subscribe(data=>this.data=data)
    
  }
}

