// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServicemanagementService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './entity/services.model';
 // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class ServiceManagementService {
  private apiUrl = 'http://localhost:9999/services'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Get all services
  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/get-all`);
  }

  // Get service by ID
  getServiceById(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/get-by-id/${id}`);
  }

  // Get services by category
  getServiceByCategory(category: string): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/get-by-category/${category}`);
  }

  // Add a new service
  addService(service: Service, userEmail: string): Observable<Service> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Service>(`${this.apiUrl}/add-service?userEmail=${userEmail}`, service, { headers });
  }

  // Update an existing service
  updateService(service: Service): Observable<Service> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Service>(`${this.apiUrl}/update-service`, service, { headers });
  }

  // Delete a service by ID
  deleteService(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete-service/${id}`);
  }
}

