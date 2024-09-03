// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { RegisterModel } from './entity/user';
import { LoginModel } from './entity/login.model';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private apiUrl = 'http://localhost:9999/auth';  // Your Spring Boot backend URL
 
  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
 
  isLoggedIn = this.loggedIn.asObservable();
 
  constructor(private http: HttpClient) {}
 
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
 
  register(user: RegisterModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }
 
  login(loginData: LoginModel): Observable<void> {
    return this.http.post<{ token: string, expiresIn:string}>(`${this.apiUrl}/login`, loginData).pipe(
      map(response => {
        // Store the JWT token in local storage
        localStorage.setItem('JWT', "Bearer "+ response.token);
        localStorage.setItem('expiresIn', response.expiresIn);
        localStorage.setItem('email',loginData.email);
       
        this.loggedIn.next(true);
      })
    );
  }
 
  // To log out the user
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('email')
    this.loggedIn.next(false);
  }
 
  // To get the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }
 
  // checkUsername(username: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/check-username`, {
  //     params: { username }
  //   });
  // }
}