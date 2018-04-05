import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {form} from './form';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {StoreService} from '../store.service';
import { User } from '../../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  names: form[]=[];
  name: form;
  user : User;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  submit(form : any) {
    
  console.log(form);
    this.user = new User();

    this.user.name=form.value.UserName;
    this.user.password=form.value.password;
    this.user.email=form.value.email;
   
    this.storeService.users.push(this.user);

    if(confirm("user added successfully")) {}
}
}
