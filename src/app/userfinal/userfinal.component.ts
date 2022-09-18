import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-userfinal',
  templateUrl: './userfinal.component.html',
  styleUrls: ['./userfinal.component.css']
})
export class UserfinalComponent implements OnInit {

  constructor(private ami:CitnewsService) {
    ami.viewuser().subscribe(
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
