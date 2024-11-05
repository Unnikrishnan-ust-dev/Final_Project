import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceProvider } from './entity/serviceprovider.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderManagementService {
  private apiUrl = 'http://localhost:9999/service-provider';

  constructor(private http: HttpClient) { }

  // Get a service provider by ID
  getServiceProviderById(id: number): Observable<ServiceProvider> {
    return this.http.get<ServiceProvider>(`${this.apiUrl}/get-service-provider/${id}`);
  }

  // Get all service providers
  getAllServiceProviders(): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(`${this.apiUrl}/get-all-service-providers`);
  }

  // Get all service providers by Govt ID verification status
  getAllServiceProvidersByGovtIdVerified(status: boolean): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(`${this.apiUrl}/get-all-service-providers-by-govt-id-verified/${status}`);
  }

  // Get a service provider by User ID
  getServiceProviderByUserId(userId: number): Observable<ServiceProvider> {
    return this.http.get<ServiceProvider>(`${this.apiUrl}/get-service-provider-by-user-id/${userId}`);
  }

  // Create a new service provider
  createServiceProvider(serviceProvider: ServiceProvider, userEmail: string): Observable<ServiceProvider> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/create-service-provider?userEmail=${userEmail}`;
    return this.http.post<ServiceProvider>(url, serviceProvider, { headers });
  }

  // Update an existing service provider
  updateServiceProvider(id: number, serviceProvider: ServiceProvider): Observable<ServiceProvider> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<ServiceProvider>(`${this.apiUrl}/update-service-provider/${id}`, serviceProvider, { headers });
  }

  // Delete a service provider by ID
  deleteServiceProviderById(id: number): Observable<ServiceProvider> {
    return this.http.delete<ServiceProvider>(`${this.apiUrl}/delete-service-provider/${id}`);
  }
}
