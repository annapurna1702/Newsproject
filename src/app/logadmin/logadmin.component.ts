import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitnewsService } from '../citnews.service';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.component.html',
  styleUrls: ['./logadmin.component.css']
})
export class LogadminComponent implements OnInit {
  ldata={
    name:"",
    
    password:""
   
  }
  constructor(private ahi:CitnewsService,private router:Router) { }

  ngOnInit(): void {
  }


Adminlogin()
{
 
    this.ahi.adlogin(this.ldata).subscribe((ldata) => {
      if (ldata.success === true) {
        this.router.navigate(['/adminpage'])
      } else {
        alert(ldata.success)
      }
    })
  
}
}
