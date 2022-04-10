import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  @Input() m: any;
  constructor() { }

  ngOnInit() {
  }

}
