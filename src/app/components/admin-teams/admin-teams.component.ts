import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  teams: any =[];
  constructor(private router: Router
  , private teamService :TeamService) { }

  ngOnInit() {
 //   this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
    this.teamService.getAllteames().subscribe((data) => {
      this.teams = data.teams;
    })

    
  }


  display(id : number) {
    this.router.navigate([ `displayTeam/${ id }` ]);
  }
  edit(id : number) {
    this.router.navigate([ `editTeam/${ id }` ]);
  }

 delete(id: number) {
    //this.matches.splice(pos, 1);
    //localStorage.setItem('matches', JSON.stringify(this.matches));
    this.teamService.deleteTeam(id).subscribe((data) => {
      console.log('data from be', data.message)

    this.teamService.getAllteames().subscribe((data) => {
      
        this.teams=data.teams
    })
    
      });
  }

}
