import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './entity/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = 'http://localhost:9999/notifications'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Create a new notification
  createNotification(userId: number, message: string): Observable<Notification> {
    const url = `${this.apiUrl}/createNotification?userId=${userId}&message=${encodeURIComponent(message)}`;
    return this.http.post<Notification>(url, {});
  }

  // Get a notification by ID
  getNotificationById(id: number): Observable<Notification> {
    const url = `${this.apiUrl}/getNotificationById/${id}`;
    return this.http.get<Notification>(url);
  }

  // Update a notification by ID
  updateNotification(id: number, notification: Notification): Observable<Notification> {
    const url = `${this.apiUrl}/updateNotification/${id}`;
    return this.http.put<Notification>(url, notification, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Delete a notification by ID
  deleteNotification(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteNotification/${id}`;
    return this.http.delete<void>(url);
  }

  // Get all notifications by User ID
  getNotificationsByUserId(userId: number): Observable<Notification[]> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<Notification[]>(url);
  }
}
