  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule, Routes } from '@angular/router';

  import { PlaywithfriendsComponent } from './playwithfriends/playwithfriends.component';
  import { PlaywithbotComponent } from './playwithbot/playwithbot.component';
  import { HomeComponent } from './home/home.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
  
  const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home page on root path
    { path: 'home', component: HomeComponent }, // Define the path as 'home', without a leading slash
  
    { path: 'playwithfriends', component: PlaywithfriendsComponent }, // Define other paths similarly
    { path: 'playwithbot', component: PlaywithbotComponent },
    { path: 'puzzles', component: PuzzlesComponent}
  ];
  

  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
