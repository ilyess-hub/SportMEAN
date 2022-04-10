import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() new: any;
  infos: any = [];
  constructor() { }

  ngOnInit() {

    this.infos = [
      {
        id: 1, img: ' assets/images/person_1.jpg', question: 'messi still in fcb', name: 'mallison', date: '25/07/2021',
        avatar: 'assets/images/img_1.jpg'
      },
      {
        id: 2, img: ' assets/images/person_1.jpg', question: 'kira ', name: 'mallison', date: '25/07/2021',
        avatar: 'assets/images/img_1.jpg'
      },
      { id: 3 , img: ' assets/images/person_1.jpg', question: 'L' , name: 'mallison', date: '25/07/2021', avatar: ''},
       { id: 4 , img: ' assets/images/person_1.jpg', question: 'near' , name: 'mallison', date: '25/07/2021', avatar: ''}

    ];
  }

}
