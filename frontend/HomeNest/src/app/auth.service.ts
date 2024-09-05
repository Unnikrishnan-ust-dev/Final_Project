import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegisterModel } from './entity/user';
import { LoginModel } from './entity/login.model';
import { User } from './entity/userprofile.model';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private apiUrl = 'http://localhost:9999/auth';
  user : User|null = null;
 
  constructor(private http: HttpClient) {
    if(localStorage.getItem("user")!=null){
      this.user = JSON.parse(localStorage.getItem("user")??"{}")
    }
  }
 
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
        this.getAuthenticatedUser().subscribe({
          next: (data)=>{
            this.user = data;
            localStorage.setItem("user",JSON.stringify(data))
          }
        });
      })
    );
  }
 
  // To log out the user
  logout() {
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('email');
    localStorage.removeItem('user');
    localStorage.removeItem('JWT');
    window.location.reload();
  }
 
  // To get the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem('JWT')?.split(" ")[1]??null;
  }
 
  getAuthenticatedUser(): Observable<User> {
    return this.http.get<User>(`http://localhost:9999/getUser`,{
      headers:{
        "Authorization":`Bearer ${this.getToken()}`
      }
    });
  }
}