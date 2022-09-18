import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sdata={
  name:"",
  dob:"",
  phone:"",
  email:"",
  address:"",
  password:"",
  password2:""
 
}

  constructor(private ali:CitnewsService) {}

  ngOnInit(): void {
  }
   Signups(){
    this.ali.signups(this.sdata).subscribe((sdata)=>{
      
    })
    
   
    
  }

  validity(){
    if(this.sdata.password==this.sdata.password2){
      alert("Success")
    }
    else{
    alert("Passwords don't match")}
  }
  

}
