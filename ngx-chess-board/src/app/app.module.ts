// // import { NgModule } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { NgxChessBoardModule } from 'ngx-chess-board';
// // import { AppComponent } from './app.component';
// // import { ActionsComponent } from './components/actions/actions.component';
// // import { FenComponent } from './components/fen/fen.component';
// // import { MovesComponent } from './components/moves/moves.component';
// // import { SettingsComponent } from './components/settings/settings.component';
// // import { PlaywithfriendsComponent } from './playwithfriends/playwithfriends.component'; 
// // import { HttpClientModule } from '@angular/common/http';
// // import { AppRoutingModule } from './app-routing.module'; 
// // import { RouterModule } from '@angular/router'; // Import RouterModule

// // @NgModule({
// //     declarations: [AppComponent, ActionsComponent, SettingsComponent, MovesComponent, FenComponent],    
// //     imports: [BrowserModule, FormsModule, NgxChessBoardModule,HttpClientModule,PlaywithfriendsComponent, AppRoutingModule,    RouterModule.forRoot([]) // Add RouterModule.forRoot([])
// //   ],
// //     providers: [
// //       ],
// //     bootstrap: [AppComponent],
// // })
// // export class AppModule {
// // }
// // // function io(arg0: string, arg1: { transports: string[]; }) {
// // //     throw new Error('Function not implemented.');
// // // }

// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgxChessBoardModule } from 'ngx-chess-board';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module'; 
// import { RouterModule } from '@angular/router'; // Import RouterModule
// <<<<<<< HEAD
// import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
// =======
// <<<<<<< HEAD
// =======

// >>>>>>> origin/master
// >>>>>>> c36e2db96bff4b34d80410b0f536a65290c859c4
// import { AppComponent } from './app.component';
// import { ActionsComponent } from './components/actions/actions.component';
// import { FenComponent } from './components/fen/fen.component';
// import { MovesComponent } from './components/moves/moves.component';
// import { SettingsComponent } from './components/settings/settings.component';
// // import { PlaywithfriendsComponent } from './playwithfriends/playwithfriends.component'; 
// import { HeaderComponent } from './header/header.component';
// <<<<<<< HEAD
// import { PuzzlesComponent } from './puzzles/puzzles.component';
// =======
// <<<<<<< HEAD
// import { SignUpComponent } from './sign-up/sign-up.component';
// @NgModule({
//     declarations: [AppComponent, ActionsComponent,    SignUpComponent , SettingsComponent, MovesComponent,SignUpComponent, FenComponent],    
//     imports: [
//         NgxChessBoardModule, //
// =======
// >>>>>>> c36e2db96bff4b34d80410b0f536a65290c859c4

// @NgModule({
//     declarations: [AppComponent, ActionsComponent, SettingsComponent, MovesComponent, FenComponent],    
//     imports: [
// >>>>>>> origin/master
//         BrowserModule,
//         FormsModule,
//         NgxChessBoardModule,
//         HttpClientModule,
//         AppRoutingModule,
//         HeaderComponent,
// <<<<<<< HEAD
//         RouterModule.forRoot([]), // Add RouterModule.forRoot([])
//         PuzzlesComponent,
//         NgIf,
//         CommonModule
// =======
// <<<<<<< HEAD
//         FormsModule,
//         RouterModule.forRoot([ { path: 'sign-up', component: SignUpComponent }]) // Add RouterModule.forRoot([])
// =======
//         RouterModule.forRoot([]) // Add RouterModule.forRoot([])
// >>>>>>> origin/master
// >>>>>>> c36e2db96bff4b34d80410b0f536a65290c859c4
//     ],
//     exports: [PuzzlesComponent],
//     providers: [],
//     bootstrap: [AppComponent],
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActionsComponent } from './components/actions/actions.component';
import { FenComponent } from './components/fen/fen.component';
import { MovesComponent } from './components/moves/moves.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    ActionsComponent,
    FenComponent,
    MovesComponent,
    SettingsComponent,
    AppComponent
],
imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    NgxChessBoardModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]), // Add RouterModule.forRoot([])
    CommonModule // Add CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
//   ngDoBootstrap() {} // Remove the ngDoBootstrap lifecycle hook

}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));