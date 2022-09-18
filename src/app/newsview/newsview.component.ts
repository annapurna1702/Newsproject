import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';
import { ViewuserComponent } from '../viewuser/viewuser.component';
@Component({
  selector: 'app-newsview',
  templateUrl: './newsview.component.html',
  styleUrls: ['./newsview.component.css']
})
export class NewsviewComponent implements OnInit {

  constructor(private ani:CitnewsService) {
    
    
   }

  ngOnInit(): void {
  }

}
