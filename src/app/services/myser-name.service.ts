import { Injectable } from '@angular/core';
import {Http,HttpModule} from '@angular/http';

@Injectable()
export class MyserNameService {
  url=null;
  constructor(private srinu:Http) {
   }

   getclist(){
    this.url= "https://restcountries.eu/rest/v2/all";
    return this.srinu.get(this.url); 
   }
}
