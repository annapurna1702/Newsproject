import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';

@Component({
  selector: 'app-adminnews',
  templateUrl: './adminnews.component.html',
  styleUrls: ['./adminnews.component.css']
})
export class AdminnewsComponent implements OnInit {
  newn={
    img:"",
    name:"",
    mobile:"",
    email:"",
    title:"",
    date:"",
    description:""
  }

  constructor(private agi:CitnewsService) { }

  ngOnInit(): void {
  }
  Enteradnews(){
    this.agi.enteradnews(this.newn).subscribe((newn)=>{
      
    })
    alert("Success");
   
    
  }

}
