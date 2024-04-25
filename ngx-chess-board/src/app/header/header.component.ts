import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterLink } from '@angular/router';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
<<<<<<< HEAD
  constructor(private router: Router) { }
 
  navigateToSignUp(event: Event) {
    event.preventDefault(); // Prevent the default behavior of the anchor element
    this.router.navigateByUrl('/sign-up');
  }
  navigateToLogIn(event: Event) {
    event.preventDefault(); // Prevent the default behavior of the anchor element
    this.router.navigateByUrl('/login');
  }
=======

>>>>>>> origin/master
}
