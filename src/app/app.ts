import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // title= "Pranjali Sharma AngularProject";
  // function_btn(){
  //   alert("button clicked!");
  count:number=0;
  handleincrement(){
    this.count=this.count+1;
  }
  handledecrement(){
    this.count=this.count-1;
  }
  handlereset(){
    this.count=0;
  }
  name=""
  displayName="";
  getName(event:Event){
    const val=(event.target as HTMLInputElement).value;
    //console.log(name);
    this.name=val;
   
  }
  showName(){
    this.displayName=this.name;

  }
  setName(){
    this.name="Pranjali";
  }


  // if else statement | Control Flow
  display=true;
  toggleDiv=true;
  //display=false;
  hidebox(){
    this.display=false;
  }
  showbox(){
    this.display=true;
  }
  toogleTwo(){
    this.toggleDiv=!this.toggleDiv;
  }

  // ELSE IF 
  color=1;
  handlecolor(val:number){
    this.color=val;
  }
  handletext(event:Event){
    this.color= parseInt((event.target as HTMLInputElement).value);
    
  }

  }

