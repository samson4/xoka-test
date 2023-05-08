import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Task } from '../Task';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  private apiUrl = 'http://localhost:3000/data'


  constructor(private http:HttpClient) { }

  fetchData():Observable<Task[]>{
     return this.http.get<Task[]>(this.apiUrl)
  }
  deleteData(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  createData(formdata:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,formdata,httpOptions)
  }
}
