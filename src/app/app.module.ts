import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from'@angular/common/http'
import { StudentService } from './services/student.service';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    HttpClientModule,
    FormsModule
    
    

  ],
  providers: [StudentService],
  bootstrap: [AppComponent,
    HomeComponent,
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ]
})
export class AppModule { }
