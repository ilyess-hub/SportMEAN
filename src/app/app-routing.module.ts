import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayersComponent } from './components/display-players/display-players.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'player', component: PlayerComponent },
  { path: 'editPlayer/:id', component: PlayerComponent },
  { path: 'displayPlayers/:id', component: DisplayPlayersComponent },

  { path: 'admin', component: AdminComponent },

  { path: 'team', component: AddTeamComponent },
  { path: 'editTeam/:id', component: AddTeamComponent },
  { path: 'displayTeam/:id', component: DisplayTeamComponent },

  { path: 'match/:id', component: DisplayMatchComponent },
  { path: 'addMatch', component: AddMatchComponent },
   { path: 'editMatch/:id', component: AddMatchComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
