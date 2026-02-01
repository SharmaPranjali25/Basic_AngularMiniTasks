import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Newprofile } from './newprofile/newprofile';
import { User } from './user/user';


export const routes: Routes = [
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'login', component:Login},
    {path:'',component:Home},
    {path:'newprofile', component:Newprofile},
    {path:'user/:id/:name', component:User},
    {path:'**',component:PageNotFound},
   
];
