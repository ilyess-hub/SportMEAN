import { JsonPipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  id: any;
  title: string;
  

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
  private router :Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
     // this.match = this.searchMatch(this.id);
      this.matchService.getMatchById(this.id).subscribe((data) => {
        
        this.match=data.match
      });
      this.title = 'edit';
    }

    else this.title = 'add';
    this.matchForm = this.fb.group({
      ScoreOne: [ '' ],
      ScoreTwo: [ '' ],
      TeamOne: [ '' ],
      TeamTwo : ['']
    });
  }
  




  addEditMatch() {
   // let id = JSON.parse(localStorage.getItem('matchId') || '1')
    //let matches = JSON.parse(localStorage.getItem('matches') || '[]');
   // this.match.id = id;
    //matches.push(this.match);
    //localStorage.setItem('matches', JSON.stringify(matches));
   // localStorage.setItem('matchId', id+1);
    
    if (this.id) {
      this.matchService.editMatch(this.match).subscribe();
      this.router.navigate([ 'admin' ]);
      
    }
    else {
      this.matchService.addMatch(this.match).subscribe();
    }
    
  }





  searchMatch(id) {
    let findMatch;
    let matches=JSON.parse(localStorage.getItem('matches' ) || '[]')
for (let i = 0; i < matches.length; i++) {
  if (matches[i].id==id) {
    findMatch = matches[ i ];
    break;
  }
  
    } return findMatch;

}


  }


