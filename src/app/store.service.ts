import { Injectable } from '@angular/core';
import {User} from '../user'

@Injectable()
export class StoreService {
  
  public users : User[]=[];
  constructor() { }

}
