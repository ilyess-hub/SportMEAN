import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title: string;
  actualDate: Date;
  constructor() { }

  ngOnInit() {
    this.title = 'admin prof';
    this.actualDate = new Date();
  }

}
