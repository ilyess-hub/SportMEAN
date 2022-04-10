import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: [ './admin-matches.component.css' ]
})
export class AdminMatchesComponent implements OnInit {
  matches: any = [];
  constructor(private router: Router,
  private matchService : MatchService) { }

  ngOnInit() {
    //this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.matchService.getAllMatches().subscribe((data) => {
      this.matches = data.matches;

    });

  }



  goToDisplay(id: number) {
    this.router.navigate([ `match/${ id }` ]);
  }

  goToEdit(id: number) {
    this.router.navigate([ `editMatch/${ id }` ]);
  }


  delete(id: number) {
    //this.matches.splice(pos, 1);
    //localStorage.setItem('matches', JSON.stringify(this.matches));
    this.matchService.deleteMatch(id).subscribe((data) => {
      console.log('data from be', data.message)

    this.matchService.getAllMatches().subscribe((data) => {
      
        this.matches=data.matches
    })
    
      });
  }

  

  compare(x:any, y: any) {
    if (x > y) {
      return [ 'win', 'green' ];
      
    }
    else if (x < y) {
      return [ 'lose', 'red' ];
    }
    else {
      return [ 'draw', 'blue' ]
    }
  }
}