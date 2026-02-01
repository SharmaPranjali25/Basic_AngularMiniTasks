import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newprofile',
  imports: [],
  templateUrl: './newprofile.html',
  styleUrl: './newprofile.css',
})
export class Newprofile {
  username:string | null="";
  //get data from route
  constructor(private route:ActivatedRoute){}
    ngOnInit(){
      // by router link
      // this.username= this.route.snapshot.paramMap.get('name');
      // console.log(this.username);

      //BUTTON METHOD
      this.route.queryParamMap.subscribe(params=>{
        // console.log(params.get('name'));
        this.username= params.get('name');
      })
      
      
    }

  
  }
