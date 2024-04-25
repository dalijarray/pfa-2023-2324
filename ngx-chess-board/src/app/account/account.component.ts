import { Component, OnInit,ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

import { Chess } from 'chess.js';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  chess: Chess;
  user: any = {
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    c_password: '',
    image: '',
    role: 'user' // Set default role to 'user'
  };
  selectedImage: string | ArrayBuffer | null = null;
image: any; 
selectImage(e:any){
  this.image=e.targer.files[0];
  console.log(this.image);
}

  // Method triggered when an image is selected
  onImageSelected(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Store the selected image data
        this.selectedImage = e.target?.result;
        // Send the image data to the backend for saving
        this.userService.saveUserImage(file).subscribe(
          (response: any) => {
            // Update the user data with the image URL received from the backend
            this.user.image = response.imageURL;
          },
          (error) => {
            console.error('Error saving user image:', error);
          }
        );
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  }
  constructor(private userService: UsersService, private router: Router) { }
//   ngOnInit(): void {
//     // You can retrieve user data from an API or any other source here
//     // For demonstration purposes, let's assume user data is stored in local storage
//     const userDataString = localStorage.getItem('userData');
//     if (userDataString) {
//       this.user = JSON.parse(userDataString);
//     } else {
//       // Handle case where user data is not available
//     }
//   }

  logout() {
    // Clear JWT token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    this.router.navigate(['/login']);
  }

      navigateTo(route: string) {
  this.router.navigateByUrl(route);
}


ngOnInit(): void {
  // Fetch user data from the backend when the component initializes
  this.userService.getUserData().subscribe(
    (userData: any) => {
      this.user = userData;
    },
    (error) => {
      console.error('Error fetching user data:', error);
    }
  );
}


  // selectImage(): void {
  //   const fileInput = document.getElementById('accountImage') as HTMLInputElement;
  //   if (fileInput) {
  //     fileInput.click();
  //   }
  // }
  
}
  



