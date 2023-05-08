import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  text: string='';
  day: string='';
  reminder: boolean=false;

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log("form-submitted")
  }

}
