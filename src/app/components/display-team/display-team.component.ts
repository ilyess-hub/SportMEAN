import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  id: any;
  teams: any=[];
  findTeam: any={};
  constructor(private activatedRoute: ActivatedRoute,
  private teamService : TeamService) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   /* this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id==this.id) {
        this.findTeam = this.teams[ i ];
        break;
      }

    }*/
    this.teamService.getteamById(this.id).subscribe((data) => {
  this.findTeam=data.team
})

  }

}
