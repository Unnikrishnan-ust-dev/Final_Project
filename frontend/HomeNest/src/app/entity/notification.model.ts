export class Notification {
    id: number;
    userId: number;
    message: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(
      id: number,
      userId: number,
      message: string,
      status: boolean,
      createdAt: Date,
      updatedAt: Date
    ) {
      this.id = id;
      this.userId = userId;
      this.message = message;
      this.status = status;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  