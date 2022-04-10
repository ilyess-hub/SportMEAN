import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { NewsComponent } from './components/news/news.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { DisplayPlayersComponent } from './components/display-players/display-players.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { ReversePipe } from './components/pipes/reverse.pipe';
import { EspacePipe } from './components/pipes/espace.pipe';
import { AsterixPipe } from './components/pipes/asterix.pipe';
import {HttpClientModule  } from "@angular/common/http";
import { InversePipe } from './components/pipes/inverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ResultComponent,
    MatchInfoComponent,
    NewsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PlayerComponent,
    AdminComponent,
    AdminMatchesComponent,
    AdminTeamsComponent,
    AdminPlayersComponent,
    AddTeamComponent,
    DisplayMatchComponent,
    AddMatchComponent,
    DisplayPlayersComponent,
    DisplayTeamComponent,
    ReversePipe,
    EspacePipe,
    AsterixPipe,
    InversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
