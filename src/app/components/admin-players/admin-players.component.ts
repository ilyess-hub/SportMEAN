import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
  players: any;
  constructor(private router: Router,
  private playerService :PlayerService) { }

  ngOnInit() {
   // this.players = JSON.parse(localStorage.getItem('players') || '[]');
    
    this.playerService.getAllplayeres().subscribe((data) => {
      this.players = data.players;
    })


  }




  Display(id : number) {
this.router.navigate([`displayPlayers/${id}`])

  }

  Edit(id: number) {
    this.router.navigate([ `editPlayer/${id}` ]);
  }

  delete(id: number) {
    //this.matches.splice(pos, 1);
    //localStorage.setItem('matches', JSON.stringify(this.matches));
    this.playerService.deletePlayer(id).subscribe((data) => {
      console.log('data from be', data.message)

    this.playerService.getAllplayeres().subscribe((data) => {
      
      this.players = data.players;
    })
    
      });
  }

}
