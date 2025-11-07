# NestJS API Demo

A comprehensive NestJS API application demonstrating user management and authentication features with PostgreSQL database integration.

## Overview

This project is a RESTful API built with NestJS, featuring user registration, authentication, and CRUD operations. It uses Prisma as the ORM, JWT for authentication, and Docker for containerization.

## Features

- **User Management**: Full CRUD operations for users
- **Authentication**: JWT-based signup and login
- **Database**: PostgreSQL with Prisma ORM
- **Containerization**: Docker and Docker Compose setup
- **TypeScript**: Full TypeScript support

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Containerization**: Docker & Docker Compose

## Project Structure

```
nest-api-demo/
├── src/
│   ├── app.controller.ts      # Root controller
│   ├── app.module.ts          # Root module
│   ├── app.service.ts         # Root service
│   ├── auth/                  # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── jwt.strategy.ts
│   └── users/                 # Users module
│       ├── users.controller.ts
│       ├── users.module.ts
│       └── users.service.ts
├── prisma/
│   └── schema.prisma          # Database schema
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Multi-container setup
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## API Endpoints

### Authentication

- `POST /auth/signup` - Register a new user
  - Body: `{ "email": "string", "password": "string", "name": "string" }`
- `POST /auth/login` - Login user
  - Body: `{ "email": "string", "password": "string" }`
- `GET /auth/profile` - Get user profile (requires JWT token)

### Users

- `GET /users` - Get all users
- `POST /users` - Create a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
  - Body: `{ "name": "string", "email": "string" }`
- `DELETE /users/:id` - Delete user

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nest-api-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env` file and update database URL if needed

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

## Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Using Docker
```bash
docker compose up --build
```

The API will be available at `http://localhost:3002` (Docker) or `http://localhost:3000` (local).

## Database

The application uses PostgreSQL as the database. The schema includes a `User` model with the following fields:

- `id`: Integer (Primary Key, Auto-increment)
- `name`: String
- `email`: String (Unique)
- `password`: String (Hashed)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Signup**: Create a new user account
2. **Login**: Authenticate and receive a JWT token
3. **Protected Routes**: Include the token in the Authorization header as `Bearer <token>`

## Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with watch
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start the production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:cov` - Run tests with coverage

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string

## Docker Setup

The project includes Docker configuration for easy deployment:

- **App Service**: Runs the NestJS application on port 3000 (exposed as 3002)
- **Database Service**: PostgreSQL database on port 5432 (exposed as 5433)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the UNLICENSED license.
