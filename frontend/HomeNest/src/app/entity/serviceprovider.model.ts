export class ServiceProvider {
  id: number;
  userId: number;
  rating?: number = 0;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  username?: string;
  govtId: string;
  govtIdType: string;
  bankAccountNumber: string;
  ifscCode: string;
  bankName: string;
  govtIdVerified: boolean;
  imageUrl?: string;
  skills?: string;
  education?: string;
  occupation?: string;

  constructor(
    id: number,
    userId: number,
    rating: number,
    location: string,
    createdAt: Date,
    updatedAt: Date,
    username: string,
    govtId: string,
    govtIdType: string,
    bankAccountNumber: string,
    ifscCode: string,
    bankName: string,
    govtIdVerified: boolean,
    imageUrl: string,
    skills: string,
    education: string,
    occupation: string
  ) {
    this.id = id;
    this.userId = userId;
    this.rating = rating;
    this.location = location;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.username = username;
    this.govtId = govtId;
    this.govtIdType = govtIdType;
    this.bankAccountNumber = bankAccountNumber;
    this.ifscCode = ifscCode;
    this.bankName = bankName;
    this.govtIdVerified = govtIdVerified;
    this.imageUrl = imageUrl;
    this.skills = skills;
    this.education = education;
    this.occupation = occupation;
  }
}
