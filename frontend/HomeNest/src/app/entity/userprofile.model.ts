export class User {
    id: number;
    firstName: string;
    lastName?: string;
    email: string;
    password: string; // Typically, this should not be exposed on the client-side
    role: string; // Adjust if using an enum
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    phoneNo?: string;
  
    constructor(
      id: number,
      firstName: string,
      email: string,
      password: string,
      role: string,
      createdAt: string,
      updatedAt: string,
      lastName?: string,
      phoneNo?: string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.email = email;
      this.password = password;
      this.role = role;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.lastName = lastName;
      this.phoneNo = phoneNo;
    }
  }
  