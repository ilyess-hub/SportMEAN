import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match: any = { ScoreOne: 1, ScoreTwo: 2, TeamOne: 'hhgc' , TeamTwo : 'hghghf'};
  constructor() { }

  ngOnInit() {
  }

}
