import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ahi:CitnewsService) {
    ahi.viewuser().subscribe(
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
