import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  data:any

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.LoadStudent().subscribe((res)=>{
      console.log(res)
      this.data=res; 
    })
  }
  SubmitData(data:NgForm){
    
    this.studentservice.PostData(data.value).subscribe((res)=>{
      console.log(res)
    })
  }



}
