import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }


Adminlogin()
{
  if(this.ldata.name=="Annapurna Padmanabhan"||this.ldata.name=="Mansi"||this.ldata.name=="Athul VS"||this.ldata.name=="Ashna Yasin"&&this.ldata.password=="purna123"||this.ldata.password=="mansi@123"||this.ldata.password=="ashna12"||this.ldata.password=="athul123")
  alert("Admin Login Success")
  
  else
  alert("Admin unrecognized")
}
}
