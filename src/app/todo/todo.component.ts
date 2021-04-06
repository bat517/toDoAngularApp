import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasksData: any ={

  }
  tasks = new FormGroup(
    {
      description: new FormControl(),
      status: new FormControl()
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  addTaskName(value)
  {
    console.log(value) 
      this.tasksData.taskName = value.task
  }
  validate(value)
  {
    console.log(value);
    if(value.task)
    {
      this.tasksData.error = false
    }
    else{
      this.tasksData.error = true;
    }
  }
}