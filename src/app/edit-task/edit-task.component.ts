import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskList=[];
  editTask:FormGroup;
  id;
  constructor(private frmb:FormBuilder,
              private router:Router,
              private activate:ActivatedRoute) {
              this.editTask=this.frmb.group({
                date:['',Validators.required],
                name:['',Validators.required],
                status:['',Validators.required]
              });
              }

  ngOnInit(): void {
    this.id=this.activate.snapshot.paramMap.get('id');
    let tasks=JSON.parse(localStorage.getItem('tasks'));
    this.taskList=tasks;
    let taskDetails=tasks[this.id];
    if(taskDetails){
      this.editTask.patchValue({
        date:taskDetails.date,
        name:taskDetails.name,
        status:taskDetails.status
      });
    } 

  }
  onSubmit(){
    console.log(this.editTask.value);
    this.taskList[this.id].date=this.editTask.value.date;
    this.taskList[this.id].name=this.editTask.value.name;
    this.taskList[this.id].status=this.editTask.value.status;
    localStorage.setItem('tasks',JSON.stringify(this.taskList));
    alert('task updated');
    this.router.navigateByUrl('/tasks');
    
  }

}
