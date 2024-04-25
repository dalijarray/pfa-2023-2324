import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userDataSource = new BehaviorSubject({ email: '', password: '' });
  private baseUrl = 'http://localhost:3000/api'; // Change this to your backend base URL
  currentUserData = this.userDataSource.asObservable();
  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  changeData(newUserData) {
    this.userDataSource.next(newUserData);
  }

  registerUser(userData: any) {
    return this.http.post(`${this.baseUrl}/register`, userData).pipe(
      tap((response: any) => {
        if (response.user && response.user.role === 'admin') {
          // Store admin token
          localStorage.setItem('adminToken', response.token);
        } else {
          // Store regular user token
          localStorage.setItem('token', response.token);
        }
      })
    );
  }
  
  

  logout() {
    // Clear JWT token from local storage upon logout
    localStorage.removeItem('token');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
  
 
 
  saveUserImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Set headers with authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/saveImage`, formData, { headers });
  }

  getUserData() {
    return this.http.get(`${this.baseUrl}/userData`);
  }
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body).pipe(
      catchError((error: any) => {
        console.error('Error logging in:', error);
        throw error; // Rethrow the error to be caught by the subscriber
      }),
      tap((response: any) => {
        if (response.user && response.user.role === 'admin' ) {
          // Store admin token
          localStorage.setItem('adminToken', response.token);
          // Redirect admin to admin dashboard
          this.router.navigate(['/admindashboard']);
        } else {
          // Store regular user token
          localStorage.setItem('token', response.token);
          // Redirect regular user to account page
          this.router.navigate(['/account']);
        }
      })
    );
  }
}

