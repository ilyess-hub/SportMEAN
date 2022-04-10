import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 playerUrl: string = 'http://localhost:3000/player';
  constructor(private httpClient: HttpClient) { }
  addplayer(player: any, img: File) {
    
    
    let formData = new FormData();
    formData.append('name', player.name);
    formData.append('poste', player.poste);
    formData.append('age', player.age);
    formData.append('nbr', player.nbr);
    formData.append('img', img);
    return this.httpClient.post(this.playerUrl,formData );

  }

  editPlayer(player: any) {
    return this.httpClient.put<{message: any}>(`${ this.playerUrl }/${player._id}`, player);
  }

  getAllplayeres() {
   return this.httpClient.get<{players :any}>(this.playerUrl);
  }

  getplayerById(id: any) {
    return this.httpClient.get<{player:any}>(`${ this.playerUrl }/${id}`)
  }

  deletePlayer(id: any) {
return this.httpClient.delete<{message : any}>(`${ this.playerUrl }/${id}`)
  }


}
