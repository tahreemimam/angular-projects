import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-concepts',
  templateUrl: './basic-concepts.component.html',
  styleUrl: './basic-concepts.component.css'
})
export class BasicConceptsComponent {
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
