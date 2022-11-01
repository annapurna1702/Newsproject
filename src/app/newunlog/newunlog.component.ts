import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
@Component({
  selector: 'app-newunlog',
  templateUrl: './newunlog.component.html',
  styleUrls: ['./newunlog.component.css']
})
export class NewunlogComponent implements OnInit {

  constructor(private ami:CitnewsService) { 
  ami.viewuser().subscribe(
    (response)=>
    {
      this.adata=response
    })

 }
  ngOnInit(): void {
  }
  adata:any=[]
}
