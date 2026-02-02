import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { email } from '@angular/forms/signals';


@Component({
  selector: 'app-root',
  imports: [Login, Profile, FormsModule, NgIf, NgFor, RouterLink, RouterOutlet, Header, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // title= "Pranjali Sharma AngularProject";
  // function_btn(){
  //   alert("button clicked!");
  count: number = 0;
  handleincrement() {
    this.count = this.count + 1;
  }
  handledecrement() {
    this.count = this.count - 1;
  }
  handlereset() {
    this.count = 0;
  }
  names = ""
  displayName = "";
  getName(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    //console.log(name);
    this.names = val;

  }
  showName() {
    this.displayName = this.names;
  }
  setName() {
    this.names = "Pranjali";
  }


  // if else statement | Control Flow
  display = true;
  toggleDiv = true;
  //display=false;
  hidebox() {
    this.display = false;
  }
  showbox() {
    this.display = true;
  }
  toogleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }

  // ELSE IF 
  color = 1;
  handlecolor(val: number) {
    this.color = val;
  }
  handletext(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);

  }

  // TWO WAY BINDING 
  // nametwo="Pranjs"
  nametwo = "";

  // TO DO LIST
  task = "";
  tasklist: { id: number, task: string }[] = [];
  addTask() {
    this.tasklist.push({ id: this.tasklist.length + 1, task: this.task });
    this.task = '';
    console.log(this.tasklist);

  }
  deleteTask(taskid: number) {
    this.tasklist = this.tasklist.filter((item) => item.id != taskid);
  }

  // DIRECTIVES IN ANGULAR
  show = false;
  // show = true;

  // *ngFor
  Students = ["Pranjali", "Jasmine", "Aakriti", "Sehar"];
  studentsData = [{
    name: 'Arjun',
    age: '23',
    email: 'arjun1@gmail.com'

  },
  {
    name: 'Neha',
    age: '24',
    email: 'neha1@gmail.com'

  },
  {
    name: 'Mayank',
    age: '23',
    email: 'mayank1@gmail.com'

  },
  {
    name: 'Raghav',
    age: '21',
    email: 'raghav1@gmail.com'

  },
  ]

  // FORMS
  nameform = new FormControl();
  passwordform = new FormControl();

  displayValue() {{
    console.log(this.nameform.value,this.passwordform.value);
    
  }

}

setValue(){
    this.nameform.setValue("Pranjali Sharma");
    this.passwordform.setValue("123456");
}

// FORM GROUPING
profileForm= new FormGroup({
  name:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required, Validators.minLength(6)]),
  email:new FormControl('',[Validators.required, Validators.email, Validators.maxLength(30)])
})
onSubmit(){
  // console.log("onSubmit called");
  console.log(this.profileForm.value);


}
get name(){
  return this.profileForm.get('name');
}
get password(){
  return this.profileForm.get('password');
}
get email(){
  return this.profileForm.get('email');
}

// PIPES
title="Pipe Starting";
}


