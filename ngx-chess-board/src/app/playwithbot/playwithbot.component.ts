import { Component} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playwithbot',
  standalone: true,
  imports: [ModalComponent ,CommonModule ],
  templateUrl: './playwithbot.component.html',
  styleUrl: './playwithbot.component.scss'
})
export class PlaywithbotComponent {
   // Variable pour suivre l'état d'ouverture de la modal

  constructor() {}

 modalOpen: boolean = false;

  openModal(): void {
    this.modalOpen = true;
  }
}
