export class Service {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    providerId: number;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(
      id: number,
      name: string,
      category: string,
      description: string,
      price: number,
      providerId: number,
      createdAt: Date,
      updatedAt: Date
    ) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.description = description;
      this.price = price;
      this.providerId = providerId;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  