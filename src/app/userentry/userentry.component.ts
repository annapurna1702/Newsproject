import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-userentry',
  templateUrl: './userentry.component.html',
  styleUrls: ['./userentry.component.css']
})
export class UserentryComponent implements OnInit {
  data={
    name:"",
    mobile:"",
    email:"",
    title:"",
    date:"",
    description:""
  }


  constructor(private aui:CitnewsService) { }

  ngOnInit(): void {
  }
  Enternews(){
    this.aui.enternews(this.data).subscribe((data)=>{
      
    })
    alert("Success");
   
    
  }


}
