import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  newTask : Task = new Task(0 , "", "", new Date(), new Date(), "","", 0, undefined);
  ListOfTasks: Array<Task> = [
    new Task(1, "Mathematic", "Do the new activities from page 32 to 40", new Date('December 10, 2021 03:24:00'), new Date('December 17, 2021 03:24:00'), "Math", "John Doe", 5, undefined),
    new Task(2, "Angular", "End the exercises for today", new Date('December 10, 2021 03:24:00'), new Date('December 17, 2021 03:24:00'), "Programation", "Jane Smith", 8, undefined),
    new Task(3, "React", "Tomorow start the new activities", new Date('December 10, 2021 03:24:00'), new Date('December 17, 2021 03:24:00'), "Programation", "Bob Johnson", 3, undefined),
    new Task(4, "Django", "Api inicial state", new Date('December 10, 2021 03:24:00'), new Date('December 17, 2021 03:24:00'), "Programation", "Alice Brown", 6, undefined),
    new Task(5, "Sass", "Introducing to SASS", new Date('December 10, 2021 03:24:00'), new Date('December 17, 2021 03:24:00'), "Programation", "Eve Wilson", 4, undefined),
    new Task(6, "Developing", "Get a job", new Date('December 10, 2021 03:24:00'), new Date('December 17, 2021 03:24:00'), "Programation", "Chris Evans", 7, undefined)
  ]

  public initializeDate(id: number): void {
    let todayDate: Date = new Date();
    this.ListOfTasks.forEach((element: any) => {
      if (element.id == id) {
        element.initialDate = todayDate;
      }
    });
  }

  public endingDate(id: number): void {
    let todayDate: Date = new Date();
    this.ListOfTasks.forEach((element: any) => {
      if (element.id == id) {
        let miliSecondsDifference = todayDate.getTime() - element.initialDate.getTime() ;
        let Difference_In_Days =Math.round(miliSecondsDifference / (1000 * 3600 * 24));
        element.endingDate = todayDate;
        element.realTime = Difference_In_Days;
      }
    });
  }

  public addTask(x : Task) : void { 
    if(this.ListOfTasks.find((element) => element.id == x.id)){
      alert("Can't add a task whit a repeated Id")
    }else{
      this.ListOfTasks.push(x)
    }
  }

  public removeTask(x : Task) : void {
    this.ListOfTasks.forEach((element : any, index) =>{
      if(element.id == x.id){
        this.ListOfTasks.splice(index, 1)
      }
    });
  }

  public selectTask(x : number) : void {
    this.ListOfTasks.forEach(element =>{
      if(element.id == x){
        this.newTask = element;
      }
    });
  }
  public modifyTask(x : Task) : void {
    if(this.ListOfTasks.find((element) => element.id == x.id)){
      this.ListOfTasks.forEach((element : any, index : number) => {
        if(element.id == x.id){
          this.ListOfTasks.splice(index, 1)
        }
      });
      this.ListOfTasks.push(x)
      this.ListOfTasks.sort((a, b) => a.id - b.id)
      alert("Product modified correctly")
    }else {
      alert("You cant change the code")
    }
  }
}
