import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AllTaskComponent } from './all-task/all-task.component'; 
import { EditTaskComponent } from './edit-task/edit-task.component'; 

const routes: Routes = [
  {path:"",redirectTo:'tasks',pathMatch:'full'},
  {path:'tasks',component:AllTaskComponent},
  {path:'add_task',component:AddTaskComponent},
  {path:'edit_task/:id',component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
