# Home Nest

**Home Nest** is a microservices-based platform that connects users with service providers for tasks such as home repairs, cleaning, tutoring, and personal care. It is designed to streamline the process of finding reliable, available, and trustworthy professionals on short notice.

## Project Structure

The project is organized into three main folders:

1. **backend**: Contains all the Spring Boot microservices and supporting code.
2. **frontend**: Contains the Angular project for the client-side application.
3. **resources**: Contains all project-related documentation files.

## Folder Details

### 1. Backend

The backend is structured as multiple microservices developed using Spring Boot. The following microservices are part of the backend:

- **User Management Service**: Handles user registration, login, authentication (with API Gateway functionalities), and role-based access control.
- **Service Provider Management Service**: Manages service providers' details, including service offerings, availability, and ratings.
- **Booking Management Service**: Handles bookings, payments, reviews, and order statuses.
- **Eureka Server**: Manages service discovery, allowing microservices to communicate with each other dynamically.

Each microservice runs independently but collaborates via Eureka for service discovery, and the API Gateway (located in the User Management Service) handles routing and access control for the system.

### 2. Frontend

The frontend is an Angular application that provides a user interface for customers and service providers to interact with the platform. Users can:

- Register and log in to their accounts.
- Search for available services and providers.
- Book services, track bookings, and make payments.
- Leave reviews for service providers.

Service providers can:

- Register and manage their service listings.
- Accept or decline bookings.
- Track earnings and reviews.

### 3. Resources

This folder contains all documentation related to the project, including:

- **Project Documentation**: General information, project scope, and technical design.
- **API Documentation**: Describes the REST APIs exposed by each microservice.
- **Setup Instructions**: Guides for running the project in local and production environments.
- **Database Schema**: Diagrams and explanations of the database structure used by each microservice.

## Technologies Used

- **Backend**:
  - Spring Boot
  - Eureka Server (for service discovery)
  - API Gateway (in User Management Service)
  - JPA/Hibernate (for database interaction)
  - MySQL (for data storage)

- **Frontend**:
  - Angular
  - TypeScript
  - HTML/CSS

- **Others**:
  - Docker (for containerization)
  - Postman (for API testing)

## How to Run the Project

### Prerequisites

- **Java 11** or later
- **Node.js** and **npm**
- **MySQL** database
- **Docker** (optional, for containerization)

### Backend Setup

1. Navigate to the `backend` folder.
2. Start each microservice by running:
   ```bash
   mvn spring-boot:run
   ```
3. Start the Eureka server:
   ```bash
   mvn spring-boot:run -pl eureka-server
   ```

### Frontend Setup

1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Angular application:
   ```bash
   ng serve
   ```

### Database Setup

1. Ensure MySQL is installed and running.
2. Create the necessary databases for each microservice as defined in the `application.properties` files located in the respective microservices.
3. Run the database migration scripts provided in the `resources` folder.

## API Documentation

Detailed API documentation is available in the `resources` folder, with instructions on how to interact with the RESTful APIs exposed by the backend services.

## Contribution Guidelines

Contributions to **Home Nest** are welcome! Please follow the guidelines provided in the `resources/contributing.md` file.

This `README.md` provides a structured overview of the project, its components, and how to run it. Let me know if you'd like to adjust or expand any sections.