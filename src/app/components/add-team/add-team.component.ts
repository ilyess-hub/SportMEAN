import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm: FormGroup;
  team: any = {};
  title: string;
  id: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
  private router : Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
     // this.match = this.searchMatch(this.id);
      this.teamService.getteamById(this.id).subscribe((data) => {
        
        this.team=data.team
      });
      this.title = 'edit';
    }

    else this.title = 'add';

    this.teamForm = this.formBuilder.group({
      nom: [ '' ],
      found: [ '' ],
      stad: [ '' ],
      own: [ '' ]

    });
  }

  addEditTeam() {
   /* let id = JSON.parse(localStorage.getItem('teamId') || '1');
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    teams.push(this.team);
    this.team.id = id;
    localStorage.setItem('teams', JSON.stringify(teams));
    localStorage.setItem('teamId', id + 1);*/
    if (this.id) {
      this.teamService.editteam(this.team).subscribe();
      this.router.navigate([ 'admin' ]);
      
    }
    else {
      this.teamService.addteam(this.team).subscribe();
    }
  }
  searchid(id) {
    let findTeam;
    let teams=JSON.parse(localStorage.getItem('teams' ) || '[]')
for (let i = 0; i < teams.length; i++) {
  if (teams[i].id==id) {
    findTeam = teams[ i ];
    break;
  }
  
    } return findTeam;

}



}
