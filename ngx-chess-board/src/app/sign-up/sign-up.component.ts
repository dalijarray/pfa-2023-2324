import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private userService: UsersService) { }
  userData: any = {
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    c_password: '',
    image: '',
    role: 'user' // Set default role to 'user'
  };

  signUp() {
    // Set the role based on the selected option
    this.userData.role = this.userData.role || 'user'; // Default to 'user' if role is not selected
    this.userService.registerUser(this.userData)
      .subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          // Optionally, you can redirect the user to another page or show a success message
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error response here, such as displaying an error message to the user
        }
      );
  }
  
}
