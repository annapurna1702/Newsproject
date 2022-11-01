import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-correctnews',
  templateUrl: './correctnews.component.html',
  styleUrls: ['./correctnews.component.css']
})
export class CorrectnewsComponent implements OnInit {
  newn={
    img:"",
    name:"",
    mobile:"",
    email:"",
    title:"",
    date:"",
    description:""
  }

  constructor(private aci:CitnewsService) { 
   
  }

  ngOnInit(): void {
  }
  
  
  Addnews(){
    this.aci.addnews(this.newn).subscribe((adata)=>{
      
    })
    alert("Success");
   
    
  }


}
