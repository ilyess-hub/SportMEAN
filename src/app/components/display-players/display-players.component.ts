import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-players',
  templateUrl: './display-players.component.html',
  styleUrls: [ './display-players.component.css' ]
})
export class DisplayPlayersComponent implements OnInit {
  id: any;
  players: any = [];
  findPlayer: any;
  constructor(private activatedRoute: ActivatedRoute,
  private playerService : PlayerService) { }

  ngOnInit() {
   /* this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[ i ].id == this.id) {
        this.findPlayer = this.players[ i ];
        break;
      }
    }*/
this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getplayerById(this.id).subscribe((data) => {
  this.findPlayer=data.player

    });


  

  }
  
}
