import { BookingStatus } from "./bookingStatus.model";

export class Booking {
    id: number;
    serviceId: number;
    userId: number;
    dateTime: string; // ISO string format
    status: BookingStatus; // Enum value, adjust type if needed
    paymentId?: number;
    latitude?: number;
    longitude?: number;
    address?: string;
    city?: string;
    postal?: number;
    createdAt: string; // ISO string format
    updatedAt: string; // ISO string format
  
    constructor(
      id: number,
      serviceId: number,
      userId: number,
      dateTime: string,
      status: BookingStatus,
      paymentId?: number,
      latitude?: number,
      longitude?: number,
      address?: string,
      city?: string,
      postal?: number,
      createdAt?: string,
      updatedAt?: string
    ) {
      this.id = id;
      this.serviceId = serviceId;
      this.userId = userId;
      this.dateTime = dateTime;
      this.status = status;
      this.paymentId = paymentId;
      this.latitude = latitude;
      this.longitude = longitude;
      this.address = address;
      this.city = city;
      this.postal = postal;
      this.createdAt = createdAt || '';
      this.updatedAt = updatedAt || '';
    }
  }
  