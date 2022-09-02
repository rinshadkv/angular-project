import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private HttpClient:HttpClient) { 
   
    
  }
  LoadStudent(){
    return this.HttpClient.get(BaseUrl+'load-students')

  }
  PostData(student_data:any){
    return this.HttpClient.post(BaseUrl+'add-student',student_data)
  }

  deleteStudent(id:any){
    return this.HttpClient.delete(BaseUrl+"delete-student/"+id)
  }
  updateStudent(id:any,data:any){
    return this.HttpClient.put(BaseUrl+"update-student/"+id,data)


  }
}
