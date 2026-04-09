import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  questions:string[] = [
    "What is your name?",
    "What is your branch?",
    "What is the name of your college?",
    "Which degree are you pursuing?"
  ];

  tasks: string[] = [
    "Workout for 1 hour",
    "Drink water",
    "Read book",
    "Run for 1 hour"
  ];

  styleHead:string = "color:red"
  styleBox:string = "display:flex; height:100px; border:2px solid black; align-items:center"
  styleButton:string = "margin:10px; padding:10px; cursor:pointer"

  str:string = "";

  displayQuestion(){
    const index = Math.floor(Math.random() * this.questions.length);
    this.str = this.questions[index];
  }

  displayTask(){
    const index = Math.floor(Math.random() * this.tasks.length);
    this.str = this.tasks[index];
  }
}
