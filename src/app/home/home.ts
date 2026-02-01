import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //   constructor(private router:Router){}
  //  goToprofile(){
  //   this.router.navigate(['newprofile'] , {queryParams:{name:'Pranjali'}});

  //  }

  // DYNAMIC BINDING
  users = [
    {
      id: '1',
      name: 'Pranjali',
      age: 21,
      email: 'pranj1@gmail.com'
    },
    {
      id: '2',
      name: 'Aakriti',
      age: 21,
      email: 'aakriti2@gmail.com'
    },
    {
      id: '3',
      name: 'Sneha',
      age: 22,
      email: 'sneha3@gmail.com'
    },
    {
      id: '4',
      name: 'Riya',
      age: 20,
      email: 'riya4@gmail.com'
    },

    {
      id: '5',
      name: 'Sneha',
      age: 21,
      email: 'sneha5@gmail.com'
    },
    {
      id: '6',
      name: 'Mitali',
      age: 21,
      email: 'mitali6@gmail.com'
    },

  ]
}
