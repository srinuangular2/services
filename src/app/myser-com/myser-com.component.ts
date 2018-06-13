import { Component, OnInit } from '@angular/core';
import { MyserNameService } from '../services/myser-name.service';

@Component({
  selector: 'app-myser-com',
  templateUrl: './myser-com.component.html',
  styleUrls: ['./myser-com.component.css']
})
export class MyserComComponent implements OnInit {
 public myarray=[];
  constructor(private srinu:MyserNameService) { }

  ngOnInit() {
    this.allcountries()
  }
  allcountries(){
    this.srinu.getclist().subscribe(
    (data)=>{
      
    this.myarray=data.json();
    console.log(this.myarray)
    
    },
    error=>alert(error),
    ()=>console.log("completed service")
    
    )
    
    }
    

}
