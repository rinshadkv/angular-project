import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path:"",redirectTo:'student',pathMatch:'full'},
  {path:"add-student",component : AddStudentComponent },
  {path:"update-student",component : UpdateStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
