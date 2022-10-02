import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CitnewsService {

  constructor(private http:HttpClient) { }
  viewadmin=()=>{
    return this.http.get('http://localhost:3000/viewcitnews')
  }
  viewuser=()=>{
    return this.http.get('http://localhost:3700/viewcnews')
  }
 
  addnews(newn:any){
    return this.http.post<any>('http://localhost:3700/accept',newn)
  }
  enternews(data:any){
    return this.http.post<any>('http://localhost:3000/addcitnews',data)
  }
  enteradnews(data:any){
    return this.http.post<any>('http://localhost:3700/accept',data)
  }
  signups(sdata:any){
    return this.http.post<any>('http://localhost:3900/signup',sdata)
  }
  logins(cdata:any){
    return this.http.post<any>('http://localhost:3900/signup',cdata)
  }
  viewsign=()=>{
    return this.http.get('http://localhost:3900/viewsign')
  }
  viewnew=()=>{
    return this.http.get('http://localhost:3700/viewonenews')
  }
  


  
}
