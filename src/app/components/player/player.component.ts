import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: any = {};
  playerForm: FormGroup;
  title: string;
  id: any;
  imagePreview: string;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
  private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
     // this.match = this.searchMatch(this.id);
      this.playerService.getplayerById(this.id).subscribe((data) => {
        
        this.player = data.player;
      });
      this.title = 'edit';
    }

    else {
      this.title = 'add';
    }

    this.playerForm = this.formBuilder.group({
      name: [ '' ],
      poste: [ '' ],
      age: [ '' ],
      nbr: [ '' ],
      img :['']

    });
  }
  addEditPlayer() {
    /*let id = JSON.parse(localStorage.getItem('playerId') || '1');
    let players = JSON.parse(localStorage.getItem('players') || '[]');
    this.player.id = id;
    players.push(this.player);
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('playerId', id + 1);*/
    
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe();
      this.router.navigate([ 'admin' ]);
      
    }
    else {
      this.playerService.addplayer(this.player, this.playerForm.value.img).subscribe(
        (data) => {
          console.log('data from be ' , data);
          
        }
      );
    }
  }



searchMatch(id) {
    let findMatch;
    let players=JSON.parse(localStorage.getItem('players' ) || '[]')
for (let i = 0; i < players.length; i++) {
  if (players[i].id==id) {
    findMatch = players[ i ];
    break;
  }

    } return findMatch;

}


  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


}
