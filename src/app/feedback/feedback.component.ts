import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  fdata={
    name:"",
    phone:"",
    email:"",
    firstvisit:"",
    reason:"",
    findinfo:"",
    likelihood:"",
    suggestion:"",
    rating:""
}
  constructor(private azi:CitnewsService) { }

  ngOnInit(): void {
  }
  Enterfeeds(){
    this.azi.enterfeeds(this.fdata).subscribe((fdata)=>{
      
    })
    alert("Success");
   
    
  }
}
