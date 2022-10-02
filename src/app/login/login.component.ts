import { Component, OnInit } from '@angular/core';
import { CitnewsService } from '../citnews.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  cdata={
    name:"",
    
    password:""
   
  }


  constructor(private aki:CitnewsService) { 
    
    aki.viewsign().subscribe(
      (response)=>
      {
        this.sdata=response
        
      }
    )
   
  }

  ngOnInit(): void {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
/*(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()*/
  }
  
  sdata:any=[
    

  ]
  
  
  Logins(){
    this.aki.logins(this.cdata).subscribe((sdata)=>{

    this.aki.viewsign().subscribe(
      (response)=>
      {
        this.sdata=response
        
      }
    )
    if((this.cdata.name==this.sdata.name)&&(this.cdata.password==this.sdata.password))
      alert("Successful")
    else
      alert("Unsuccessful")
    })
    
    

   
   
    
    
   
    
  }
  
}
