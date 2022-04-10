import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string = 'http://localhost:3000/matches';// port du backend
  constructor(private httpClient: HttpClient) { }



  addMatch(match: any) {
    return this.httpClient.post(this.matchUrl, match);

  }

  editMatch(match: any) {
    return this.httpClient.put<{message : any}>(`${ this.matchUrl }/${match._id}`, match);

  }

  getAllMatches() {
   return this.httpClient.get<{matches: any}>(this.matchUrl);
  }

  getMatchById(id: any) {

    return this.httpClient.get<{match: any}>(`${ this.matchUrl }/${id}`)
  }

  deleteMatch(id: any) {
return this.httpClient.delete<{message : any}>(`${ this.matchUrl }/${id}`)
  }

}
