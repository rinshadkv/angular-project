import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  obs =new Observable ((observer) =>{
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    observer.next("5")
  
  
  
  
  })





  constructor(private studentService:StudentService) {
    this.getData()
    this.obs.subscribe(res=>{
      console.log(res)
    })
   }
  studentList:any
  ngOnInit(): void {
    
    

  }

   getData(){ 
    this.studentService.LoadStudent().subscribe(res=>{
      this.studentList = res
    })
  }

deleteStudent(id:any){
  this.studentService.deleteStudent(id).subscribe(res=>{
     console.log(res)
     this.getData()

  })
  
}

}
