import { Component,ViewChild,OnInit,Input } from '@angular/core';

import { Router } from '@angular/router';
import { Chess } from 'chess.js';
import { forEach } from 'lodash';
import { CommonModule } from '@angular/common';
import { NgxChessBoardModule } from 'ngx-chess-board';
import {
  MoveChange,
  NgxChessBoardComponent,
  PieceIconInput
} from 'ngx-chess-board';
import {
  ColorInput,
  PieceTypeInput
} from 'ngx-chess-board';
import { FenComponent } from '../components/fen/fen.component';
import { PuzzlesService } from '../puzzles.service';

@Component({
  selector: 'app-puzzles',
  standalone: true,
  imports: [NgxChessBoardModule,CommonModule],
  templateUrl: './puzzles.component.html',
  styleUrl: './puzzles.component.scss'
})
export class PuzzlesComponent implements OnInit{

    chess: Chess;

    public index :number=0;
     rate :number =1500;
    popularity : number=95;
     theme : string= "Arabian mate";
    public datapuzz :any[];
    public trueMove:boolean=false;
    public falseMove:boolean=false;
    bool:boolean=false;
    public successMessage:string='';
  constructor(private router: Router,private service:PuzzlesService) {
  }
  ngOnInit(): void {
      
  }
 
  @ViewChild('board')
  boardManager: NgxChessBoardComponent;

  @ViewChild('fenManager') fenManager: FenComponent;
  public fen = '6r1/8/R2bpk2/2p1p2p/1pP1P2P/1P1N1P2/4K3/8 b - - 2 49    ';
  private currentStateIndex: number;
  manualMove = 'd2d4';
  icons: PieceIconInput = {
      blackBishopUrl: '',
      blackKingUrl: '',
      blackKnightUrl: '',
      blackPawnUrl: '',
      blackQueenUrl: '',
      blackRookUrl: '',
      whiteBishopUrl: '',
      whiteKingUrl: '',
      whiteKnightUrl: '',
      whitePawnUrl: '',
      whiteQueenUrl: '',
      whiteRookUrl: ''
  };

  public darkTileColor = '#769557';
  public lightTileColor = '#ebedd1';
  public size = 600;
  public dragDisabled = false;
  public drawDisabled = false;
  public lightDisabled = false   ;
  public darkDisabled = false;
  public freeMode = false;
  public addPieceCoords: string = 'a4';
  public selectedPiece = '1';
  public selectedColor = '1';
  public pgn: string = '';



// puuuuuuuuuuuuuuuuuzzzzzzzzzzzzzzles
public getPuzzlesByFilter(){
    this.service.getPuzzles( this.rate,this.popularity).subscribe(
        (res:any)=>{
            console.log(res);
            this.datapuzz=res;
            this.exicuterPuzzels(this.datapuzz[0]);
          
        }
    )
}
public playerr = true;
public  i:number=0;
async exicuterPuzzels(datapuzz:any ){
    this.fen=datapuzz.FEN;

     this.setFen();
    
    const movesArray = datapuzz.Moves.split(' ');
    console.log(movesArray);
    // this.fen=this.getFENAfterMove(this.fen,movesArray[0]);
    const player=this.boardManager.getFEN().split(' ')[1];
    if (this.boardManager.getFEN()[1]==='w'){
        this.boardManager.reverse();
    }
    this.service.delay(5000); 
    
    this.i=0;

    console.log('i=',this.i,'movesArray[i]=',movesArray[this.i])
    this.boardManager.move(movesArray[0]);
    if(this.boardManager.getFEN()[1]=='w'){
        this.playerr=true
    }
    else{
        this.playerr=false;
    }
    this.i++;
//    this.bool=true;
}
move(){
    

console.log(this.manualMove)}

nextPuzzles(){
    this.index= this.index+1;
    this.fen=this.datapuzz[this.index].FEN;
    this.exicuterPuzzels(this.datapuzz[this.index]);
}


//  getFENAfterMove(fen: string, move: string): string {
//     // Créer une instance de la position d'échecs avec la FEN donnée
//     const chess = new Chess(fen);
  
//     // Effectuer le coup sur la position
//     const isValidMove = chess.move(move);
  
//     // Si le coup est valide, retourner la nouvelle FEN, sinon retourner la FEN d'origine
//     return isValidMove ? chess.fen() : fen;
//   }






 alertPlaceholder = document.getElementById('liveAlertPlaceholder')
 appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  this.alertPlaceholder.append(wrapper)
}

 alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    this.appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
  

// puuuuuuuuuuuuuuuuuzzzzzzzzzzzzzzlzs
  public reset(): void {
      alert('Resetting board');
      this.boardManager.reset();
      this.fen = this.boardManager.getFEN();
      this.freeMode = false;
  }

  public reverse(): void {
      this.boardManager.reverse();
  }

  public undo(): void {
      this.boardManager.undo();
      this.fen = this.boardManager.getFEN();
      this.pgn = this.boardManager.getPGN();
  }

  public setFen(): void {
      if (this.fen) {
          this.boardManager.setFEN(this.fen);
      }
  }


   public validateAndDisplayMessage(movep: string,movel:string): void {
    
    if (movep===movel) {
      
      this.successMessage += `<div class="alert alert-success mt-5" role="alert ">
          ${movep} is correct !
        </div>`;
      document.getElementById('messageContainer').innerHTML = this.successMessage;
    } else {
  
      const errorMessage = `<div class="alert alert-danger mt-5" role="alert">
          ${movep} is incorrect !
        </div>`;
      document.getElementById('messageContainer').innerHTML = errorMessage;
    }
  }

//     this.fen = this.boardManager.getFEN();
//     this.pgn = this.boardManager.getPGN();}
  public moveCallback(move: MoveChange): void {
    
      this.fen = this.boardManager.getFEN();
      this.pgn = this.boardManager.getPGN();
      const movesArray = this.datapuzz[this.index].Moves.split(' ');
      const movesArrayLength = movesArray.length; // Get the length of movesArray
      if(this.i%2==0 && this.i!=0 && movesArrayLength!=this.i){
          console.log(this.fen);
          this.chess=new Chess(this.fen);
          this.chess.move(movesArray[this.i]);
          this.boardManager.setFEN(this.chess.fen());
          this.fen=this.boardManager.getFEN();
          this.i++;

        }
        else
        {
            this.validateAndDisplayMessage(movesArray[this.i],move.move)
        }
        // console.log(movesArray[this.i]);
        //   this.chess=new Chess(move.fen);
    //   const legalMoves = this.chess.moves();
    //   console.log(legalMoves);
    //   console.log(move);
    //   movesArray.shift();
    // movesArray.shift();
    this.i++;
    console.log('i=',this.i,'movesArray[i]=',movesArray[this.i])
        // console.log(this.chess.turn());

        // console.log(this.chess.turn());

        // // this.fen=this.chess.fen;
        
        // console.log(this.chess.fen());

        // this.chess.move(movesArray[this.i]);
        // console.log(shess.fen);
        // this.boardManager.move(movesArray[this.i])
    //   }
  }

  public moveManual(): void {
      this.boardManager.move(this.manualMove);
  }

  getFEN() {
      let fen = this.boardManager.getFEN();
      console.log(fen);
      alert(fen);
  }

  showMoveHistory() {
      alert(JSON.stringify(this.boardManager.getMoveHistory()));
  }

  switchDrag() {
      this.dragDisabled = !this.dragDisabled;
  }

  switchDraw() {
      this.drawDisabled = !this.drawDisabled;
  }

  switchDarkDisabled() {
      this.darkDisabled = !this.darkDisabled;
  }

  switchLightDisabled() {
      this.lightDisabled = !this.lightDisabled;
  }

  switchFreeMode() {
      this.freeMode = !this.freeMode;
  }

  addPiece() {
      let piece = this.resolveSelectedPiece();
      let color = this.resolveSelectedColor();
      this.boardManager.addPiece(piece, color, this.addPieceCoords);
  }

  private resolveSelectedPiece(): PieceTypeInput {
      switch (this.selectedPiece) {
          case '1':
              return PieceTypeInput.QUEEN;
          case '2':
              return PieceTypeInput.KING;
          case '3':
              return PieceTypeInput.ROOK;
          case '4':
              return PieceTypeInput.BISHOP;
          case '5':
              return PieceTypeInput.KNIGHT;
          case '6':
              return PieceTypeInput.PAWN;
      }
  }

  private resolveSelectedColor(): ColorInput {
      switch (this.selectedColor) {
          case '1':
              return ColorInput.LIGHT;
          case '2':
              return ColorInput.DARK;
      }
  }

  public setPgn() {
      this.boardManager.setPGN(this.pgn);
  }

  loadDefaultPgn() {
      this.pgn = '1. c4 b5 2. cxb5 c6 3. bxc6 Nxc6 4. Qa4 a6\n' +
          '5. Qxa6 Rb8 6. b3 d5 7. f4 e5 8. fxe5 f6\n' +
          '9. exf6 gxf6 10. Nf3 f5 11. Ne5 Bb7 12. Qxb7 Na7\n' +
          '13. Qxb8 Qxb8 14. Kf2 Kd8 15. Nc3 Be7 16. Nc4 Bf6\n' +
          '17. Nb6 Nb5 18. Nbxd5 f4 19. Ne4 Na7 20. Nexf6';
      this.setPgn();
  }

  getPGN() {
      alert(this.boardManager.getPGN());
  }

}
