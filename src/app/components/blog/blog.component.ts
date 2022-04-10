import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any;
  constructor() { }

  ngOnInit() {
    this.articles = [
      { id: 1, content: 'hello' , date : '25/04/2021'},
       { id: 2, content: 'tatakaye', date : '28/08/2020' }
    ];
  }

}
