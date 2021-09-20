import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTask:FormGroup;
  tasks:any=[];
  constructor(private frmb:FormBuilder,
              private router:Router,

             ) {
              this.addTask=this.frmb.group({
                date:['',Validators.required],
                name:['',Validators.required],
                status:['',Validators.required]
              });
              }
  
  ngOnInit(): void {
    let task=JSON.parse(localStorage.getItem('tasks'));
    console.log(task);
    if(task !=null && task !=undefined){
      this.tasks=task;
    }
  }

  onSubmit(){
    console.log(this.addTask.value);
    // console.log(this.tasks.length);
    this.tasks.push({
      date:this.addTask.value.date,
      name:this.addTask.value.name,
      status:this.addTask.value.status
    });
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
    alert('Task added sucessfully');
    this.router.navigateByUrl('/tasks');
    
  }
}
