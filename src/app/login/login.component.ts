import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private storeService : StoreService) { }

  ngOnInit() {
  }


user:User;
  submit(form:any)
  {
    console.log(form);

      //if(this.storeService.users.find(x => x.name == form.value.UserName)
    this.user = this.storeService.users.find(x =>  x.name == form.value.UserName);

    console.log(this.user);
if(this.user!= null)
{
   if( form.value.password === this.user.password )
   {
    if(confirm("User login Successful")) {form.reset();}
   }
   else
   {
    if(confirm("User login failed")) {form.reset();}
   }
  }
  
  else
  {
    if(confirm("User login failed")) {form.reset();}
  }
}
}
