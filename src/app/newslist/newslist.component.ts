import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitnewsService } from '../citnews.service';
import { ViewuserComponent } from '../viewuser/viewuser.component';
@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  i:any;
  newsid:any;
  

  constructor(private activatedRoute:ActivatedRoute, private service:CitnewsService) { }

  ngOnInit(): void {
    this.newsid=this.activatedRoute.snapshot.paramMap.get('id');
     //this.course=this.service.courses.find(x => x.id == this.courseId);
    //this.courseId = this.activatedRoute.snapshot.params['id'];
    //this.courseId = this.route.snapshot.params['name'];
    this.i = this.service.newsitems.find( x=>x.id == this.newsid);;
  }

}
