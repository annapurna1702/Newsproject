import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-feedview',
  templateUrl: './feedview.component.html',
  styleUrls: ['./feedview.component.css']
})
export class FeedviewComponent implements OnInit {

  constructor(private agi:CitnewsService) {
    agi.viewfeed().subscribe(
      (response)=>
      {
        this.fdata=response
      }
    )
   }

  ngOnInit(): void {
  }
  fdata:any=[]
}
