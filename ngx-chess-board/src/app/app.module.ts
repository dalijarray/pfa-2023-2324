// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgxChessBoardModule } from 'ngx-chess-board';
// import { AppComponent } from './app.component';
// import { ActionsComponent } from './components/actions/actions.component';
// import { FenComponent } from './components/fen/fen.component';
// import { MovesComponent } from './components/moves/moves.component';
// import { SettingsComponent } from './components/settings/settings.component';
// import { PlaywithfriendsComponent } from './playwithfriends/playwithfriends.component'; 
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module'; 
// import { RouterModule } from '@angular/router'; // Import RouterModule

// @NgModule({
//     declarations: [AppComponent, ActionsComponent, SettingsComponent, MovesComponent, FenComponent],    
//     imports: [BrowserModule, FormsModule, NgxChessBoardModule,HttpClientModule,PlaywithfriendsComponent, AppRoutingModule,    RouterModule.forRoot([]) // Add RouterModule.forRoot([])
//   ],
//     providers: [
//       ],
//     bootstrap: [AppComponent],
// })
// export class AppModule {
// }
// // function io(arg0: string, arg1: { transports: string[]; }) {
// //     throw new Error('Function not implemented.');
// // }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FenComponent } from './components/fen/fen.component';
import { MovesComponent } from './components/moves/moves.component';
import { SettingsComponent } from './components/settings/settings.component';
// import { PlaywithfriendsComponent } from './playwithfriends/playwithfriends.component'; 
import { HeaderComponent } from './header/header.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

@NgModule({
    declarations: [AppComponent, ActionsComponent, SettingsComponent, MovesComponent, FenComponent],    
    imports: [
        BrowserModule,
        FormsModule,
        NgxChessBoardModule,
        HttpClientModule,
        AppRoutingModule,
        HeaderComponent,
        RouterModule.forRoot([]), // Add RouterModule.forRoot([])
        PuzzlesComponent,
        NgIf,
        CommonModule
    ],
    exports: [PuzzlesComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
