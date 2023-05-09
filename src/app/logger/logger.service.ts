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
  deleteData(data:Task):Observable<Task>{
    const url=`${this.apiUrl}/${data.id}`
    return this.http.delete<Task>(url)
  }
  createData(formdata:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,formdata,httpOptions)
  }
  toggleActive(emp:any):Observable<any>{
    const url=`${this.apiUrl}/${emp.id}`
    const data = {
      "id": emp.id,
      "company":emp.company ,
      "employee":emp.employee ,
      "dept":emp.dept ,
      "salary":emp.salary ,
      "status": !emp.status,
      "manager": emp.manager
    }
  
    console.log(url,data)
    return this.http.put<any>(url,emp,httpOptions)
  }
  updateEmployeeData(emp:any):Observable<any>{
    const url=`${this.apiUrl}/${emp.id}`
    return this.http.put<any>(url,emp,httpOptions)
  }
}
