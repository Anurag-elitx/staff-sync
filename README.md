# StaffSync - Employee Management System

A robust and scalable Employee Management System modernized with NestJS, PostgreSQL, AWS S3, and Docker.

## Features

- **Employee Management**: Full CRUD operations for employee records.
- **Role-based Access Control (RBAC)**: Secure endpoints protected by JWT and role guards (`ADMIN`, `HR`, `EMPLOYEE`).
- **Cloud Storage**: AWS S3 integration for employee document/photo uploads.
- **API Documentation**: Fully documented REST API via Swagger OpenAPI.
- **Containerization**: Single-command local environment setup via Docker and Docker Compose.

## Tech Stack

- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL
- **ORM**: Sequelize (`sequelize-typescript`)
- **Authentication**: JWT & Passport.js
- **Cloud**: AWS SDK (S3)
- **Container**: Docker & Docker Compose

## Quick Start (Docker)

The easiest way to run the application is using Docker. Ensure Docker Desktop is running.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anurag-elitx/staff-sync.git
   cd staff-sync
   ```

2. **Run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access the Application:**
   - **API Docs (Swagger)**: http://localhost:8000/api/docs
   - **API Base URL**: http://localhost:8000/api

## Manual Installation (Local Dev)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment variables:**
   Ensure a PostgreSQL instance is running locally or remotely and map the connection details. S3 credentials are required to use the upload endpoints.

3. **Run the Application:**
   ```bash
   npm run start:dev
   ```

## AWS EC2 Deployment

See the [DEPLOYMENT.md](./DEPLOYMENT.md) guide for deploying this containerized application to AWS EC2.
