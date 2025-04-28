
# Subscription Tracker API

A **MERN Stack** API backend to manage user subscriptions.  
Provides user authentication, subscription management, user operations, and middleware protections using **Arcjet** and **JWT**.



## 🚀 Features

- **Authentication:**  
  User Sign-Up, Sign-In, Sign-Out with secure JWT tokens.

- **Subscription Management:**  
  Create, update, delete, fetch, and cancel subscriptions.

- **User Management:**  
  Fetch user details and list all users.

- **Security Middleware:**  
  - JWT Authentication  
  - Rate-limiting and Bot Protection using Arcjet  
  - Centralized Error Handling

- **Database:**  
  MongoDB integration via Mongoose.

---


## 🏗️ Project Structure

| Folder/File        | Description                                    |
|:-------------------|:-----------------------------------------------|
| `app.js`            | Main entry point of the application           |
| `config/`           | Configuration files (env, Arcjet, etc.)       |
| `controllers/`      | Business logic for auth, users, subscriptions |
| `database/`         | MongoDB connection setup                      |
| `middlewares/`      | Auth, error, and Arcjet protection middleware |
| `models/`           | Mongoose schemas: `User`, `Subscription`      |
| `routes/`           | Route definitions for API endpoints           |

---


## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/const-nishant/subscription-tracker.git
   cd subscription-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.development.local` or `.env.production.local`.
   - Update the variables accordingly.

4. **Start MongoDB:**
   - Use a local MongoDB server  
     **OR**  
   - Use MongoDB Atlas (update `DB_URI` in `.env`).

---


## 🧪 Usage

### Development
```bash
npm run dev
```
- Starts the server using **nodemon**.
- Runs at `http://localhost:<PORT>`.

### Production
```bash
npm start
```
- Starts the production server.

---


## 🛤️ API Endpoints

### 🔐 Authentication
- `POST /api/v1/auth/sign-up` — Register a new user
- `POST /api/v1/auth/sign-in` — Log in an existing user
- `POST /api/v1/auth/sign-out` — Log out a user

### 👤 Users
- `GET /api/v1/users` — Get all users
- `GET /api/v1/users/:id` — Get a user by ID

### 📦 Subscriptions
- `GET /api/v1/subscriptions` — Get all subscriptions
- `GET /api/v1/subscriptions/:id` — Get a subscription by ID
- `POST /api/v1/subscriptions` — Create a new subscription (auth required)
- `PUT /api/v1/subscriptions/:id` — Update a subscription
- `DELETE /api/v1/subscriptions/:id` — Delete a subscription
- `GET /api/v1/subscriptions/user/:id` — Get subscriptions for a user (auth required)
- `PUT /api/v1/subscriptions/:id/cancel` — Cancel a subscription
- `GET /api/v1/subscriptions/upcoming-renewals` — Fetch upcoming renewals

---



## 🌎 Environment Variables

| Variable        | Description                             |
|:----------------|:----------------------------------------|
| `NODE_ENV`       | `development` or `production`           |
| `PORT`           | Server port number                     |
| `DB_URI`         | MongoDB connection URI                 |
| `JWT_SECRET`     | JWT Secret key                         |
| `JWT_EXPIRES_IN` | JWT Token expiry time                  |
| `ARCJET_KEY`     | Arcjet API Key                         |
| `ARCJET_ENV`     | Arcjet Environment (`development` or `production`) |

---


## 🛡️ Middleware

- **Authentication Middleware:**  
  Validates JWT tokens and attaches user info to requests.


- **Error Handling Middleware:**  
  Catches and formats server errors.


- **Arcjet Middleware:**  
  Protects API endpoints by:  
  - Detecting bots  
  - Enforcing rate limits

---



## 🛠️ Tech Stack

- **Backend:** `Express.js`, `Mongoose`
- **Authentication:** `jsonwebtoken`, `bcryptjs`
- **Security:** `@arcjet/node`, `cookie-parser`
- **Development Tools:** `nodemon`, `eslint`

---


## 🎯 Quick Start Example

```bash
git clone https://github.com/const-nishant/subscription-tracker.git
cd subscription-tracker
npm install
cp .env.development.local .env
# Update environment variables
npm run dev
```

Server will be running at:

```
http://localhost:<PORT>

```
---

- p.s currently working on it
