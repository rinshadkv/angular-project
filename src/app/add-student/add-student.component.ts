import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.sass']
})
export class AddStudentComponent implements OnInit {
  

  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {
  }

  regStudent(form:NgForm){
    console.log(form.value)
    this.StudentService.PostData(form.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
