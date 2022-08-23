import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';


@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent implements OnInit {

  
  newn={
    name:"",
    mobile:"",
    email:"",
    title:"",
    date:"",
    description:""
  }

  

  constructor(private api:CitnewsService) {
    api.viewadmin().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[]
 
  Addnews(){
    this.api.addnews(this.newn).subscribe((adata)=>{
      
    })
    alert("Success");
   
    
  }
  
 


}
