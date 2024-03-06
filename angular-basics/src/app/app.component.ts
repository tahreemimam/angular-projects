import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
  CourseName:string ='';
  condition:boolean = false;
  number='four';
  colValue='red';
  bgColor='yellow';
  className='abc';
  technologies=['Java','Frontend','Database'];
  technologyName="Java Full Stack";
  kcValue=0.5;
  price=3500;
  dateVal= Date.now();
  someval=''
}
