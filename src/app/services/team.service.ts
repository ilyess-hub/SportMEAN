import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
 teamUrl: string = 'http://localhost:3000/teams';
  constructor(private httpClient: HttpClient) { }


  addteam(team: any) {
    return this.httpClient.post(this.teamUrl, team);

  }

  editteam(team: any) {
    return this.httpClient.put<{message: any}>(`${ this.teamUrl }/${team._id}`, team);

  }team

  getAllteames() {
   return  this.httpClient.get<{teams :any}>(this.teamUrl);
  }

  getteamById(id: any) {

    return this.httpClient.get<{team:any}>(`${ this.teamUrl }/${id}`)
  }

  deleteTeam(id: any) {
return this.httpClient.delete<{message : any}>(`${ this.teamUrl }/${id}`)
  }

}
