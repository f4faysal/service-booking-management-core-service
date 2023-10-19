
# Service Booking Management Core Service

Service Booking Management Core Service is a backend application designed to manage service bookings, user profiles, and administrative operations. This service is built using Next.js, Prisma, PostgreSQL, JWT (JSON Web Tokens), and other technologies.

## Live Project Links:
- [User-Facing Frontend](https://motel-front-end.vercel.app/)
- [Admin Dashboard](https://motel-dashboard.vercel.app/)

## ER Diadram
![ER Diagram](https://res.cloudinary.com/dhvuyehnq/image/upload/v1697754735/sb6ufm9ahiirxgva5sfz.png)


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [User-Facing Features](#user-facing-features)
  - [Admin-Facing Features](#admin-facing-features)
  - [Super Admin-Facing Features](#super-admin-facing-features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Features

- User authentication and registration.
- User profile management.
- Service management for users.
- Booking management for administrators.
- User and admin management.
- Content management for administrators.

## Getting Started

### Prerequisites

Before you can run this service, you need to have the following software and services installed:

- Node.js
- PostgreSQL
- Prisma CLI
- Next.js
- JWT library (e.g., jsonwebtoken)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/f4faysal/service-booking-management-core-service.git
   ```

2. Change into the project directory:

   ```bash
   cd service-booking-management-core-service
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables, such as database connection details and JWT secret, in a `.env` file.

5. Run the Prisma migration to create the database schema:

   ```bash
   npx prisma migrate dev
   ```

6. Start the Next.js server:

   ```bash
   npm run dev
   ```

Your service should now be running locally.

## Usage

### User-Facing Features

- User authentication and registration.
- Managing user profiles.
- Booking services.
- Viewing service details and reviews.

### Admin-Facing Features

- Managing booking requests.
- User and admin management.
- Content management (blog posts).

### Super Admin-Facing Features

- Managing super admin users.
- Super admin profile management.

## API Endpoints

For detailed information on available API endpoints and their usage, refer to the [API documentation](API.md).

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your feature description"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request to the main repository.

