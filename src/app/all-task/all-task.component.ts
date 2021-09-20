import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
  taskList=[];
  constructor() { }

  ngOnInit(): void {
    let tasks=JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    if(tasks !=null && tasks !=undefined){
      this.taskList=tasks;
    }
  }
  delete_task(item){
    if(confirm('Are you sure to delete this task')){
      this.taskList.splice(item,1);
    }
  }

}
