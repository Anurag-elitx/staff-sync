<div align="center">
  <h1>StaffSync 🚀</h1>
  <p><strong>Enterprise-Grade Employee Management System</strong></p>
  
  ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
  ![AWS S3](https://img.shields.io/badge/AWS%20S3-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
</div>

<br />

A robust, scalable Employee Management System designed to streamline HR operations. Built from the ground up using **NestJS** and **TypeScript**, StaffSync delivers a modern RESTful API with highly normalized data persistence via **PostgreSQL** and seamless cloud document storage via **AWS S3**.

## ✨ Key Features

- 👥 **Comprehensive Employee Lifecycle Management**: Full CRUD operations for creating and updating staff directories.
- 🔒 **Role-Based Access Control (RBAC)**: Airtight security using JWT strategies (`ADMIN`, `HR`, `EMPLOYEE` tiers).
- ☁️ **AWS S3 Cloud Storage**: Instant, reliable document and profile photo persistence using `@aws-sdk/client-s3`.
- 🐳 **Containerized & Production-Ready**: 100% Dockerized via multi-stage builds. Bootstraps entirely offline in seconds.
- 📚 **Interactive Swagger API Docs**: Automatically generated OpenAPI interface for frictionless frontend integrations.

## 🏗️ Architecture & Tech Stack

- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL
- **ORM**: Sequelize (`sequelize-typescript`)
- **Authentication**: Passport.js + JWT (JSON Web Tokens)
- **Cloud Provider**: Amazon Web Services (S3 via SDK v3)
- **DevOps**: Docker & Docker Compose

## 🚀 Quick Start (Docker)

The fastest way to experience StaffSync is through the pre-configured Docker cluster.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anurag-elitx/staff-sync.git
   cd staff-sync
   ```

2. **Boot the Cluster**
   ```bash
   docker-compose up --build -d
   ```
   *This single command pulls Postgres 15, builds the NestJS API, handles port mappings, and syncs the schema.*

3. **Explore the API**
   - **Swagger Docs**: [http://localhost:8000/api/docs](http://localhost:8000/api/docs)
   - **Base Endpoint**: `http://localhost:8000/api`

## 💻 Manual Installation (Local Dev)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file referencing a local PostgreSQL instance and AWS credentials. See the `.env` requirements within `docker-compose.yml`.

3. **Start Development Server**
   ```bash
   npm run start:dev
   ```

## ☁️ AWS EC2 Deployment Guide

Detailed instructions on securely launching this application into a production AWS EC2 instance (including security group configs and reverse proxies) are provided in the **[DEPLOYMENT.md](./DEPLOYMENT.md)**.
