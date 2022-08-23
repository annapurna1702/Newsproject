import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

 

  constructor(private asi:CitnewsService) {
    asi.viewuser().subscribe(
      (response)=>
      {
        this.adata=response
      }
    )
    
   }
  
  
  

  ngOnInit(): void {
  }
  adata:any=[]
 
}
