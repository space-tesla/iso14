import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  students = [
    { name: "Vaibhav", percent: 82 },
    { name: "Gauri", percent: 85 },
    { name: "Abhishek", percent: 91 },
    { name: "Aditya", percent: 85 },
    { name: "Nikhil", percent: 74 }
  ];

  result = this.students
    .filter(s => s.percent === 85)
    .map(s => s.name);

}
