import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-currnewshome',
  templateUrl: './currnewshome.component.html',
  styleUrls: ['./currnewshome.component.css']
})
export class CurrnewshomeComponent implements OnInit {

  constructor(private ahi:CitnewsService) {
    ahi.viewuser().subscribe(
      (response)=>
      {
        this.adata=response
      })

   }
newsitems:any=[]
  ngOnInit(): void {
    this.newsitems=this.ahi.newsitems; 
  }
adata:any=[]
}
