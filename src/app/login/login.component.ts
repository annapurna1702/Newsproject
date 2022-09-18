import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  cdata={
    name:"",
    
    password:""
   
  }


  constructor(private aki:CitnewsService,private http:HttpClient) { 
    
    aki.viewsign().subscribe(
      (response)=>
      {
        this.sdata=response
        
      }
    )
   
  }

  ngOnInit(): void {
  }
  
  sdata:any=[
    

  ]
  
  
  Logins(){
    this.aki.logins(this.cdata).subscribe((sdata)=>{

    this.aki.viewsign().subscribe(
      (response)=>
      {
        this.sdata=response
        
      }
    )
    if((this.cdata.name==this.sdata.name)&&(this.cdata.password==this.sdata.password))
      alert("Successful")
    else
      alert("Unsuccessful")
    })

    

   
   
    
    
   
    
  }
  
}
