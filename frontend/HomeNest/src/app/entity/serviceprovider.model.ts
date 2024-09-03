export class ServiceProvider {
    id?: number;  // Corresponds to Long in Java, optional
    userId?: number;  // Corresponds to Long in Java, optional
    rating: number;
    location?: string;
    createdAt?: Date;  // Using Date for timestamps
    updatedAt?: Date;  // Using Date for timestamps
    govtId?: string;
    bankAccountNumber?: string;
    ifscCode?: string;
    bankName?: string;
    govtIdVerified: boolean;
    username: string;
  
    constructor(
        username: string,
      id?: number,
      userId?: number,
      rating: number = 0,
      location?: string,
      createdAt?: Date,
      updatedAt?: Date,
      govtId?: string,
      bankAccountNumber?: string,
      ifscCode?: string,
      bankName?: string,
      govtIdVerified: boolean = false
      

    ) {
      this.id = id;
      this.userId = userId;
      this.rating = rating;
      this.location = location;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.govtId = govtId;
      this.bankAccountNumber = bankAccountNumber;
      this.ifscCode = ifscCode;
      this.bankName = bankName;
      this.govtIdVerified = govtIdVerified;
      this.username = username;
    }
  }
  