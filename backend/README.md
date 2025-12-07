# Node.js Socket Chat App (Backend)

This is the **backend API** for the real-time chat application built with **Node.js**, **Express**, and **Socket.IO**.  
It handles **authentication using JSON Web Tokens (JWT) stored in cookies**, user management, real-time messaging, and media uploads using **Cloudinary**.

The backend connects to **MongoDB** and uses environment variables for secure configuration.

---

## 🚀 Features

- Real-time communication using **Socket.IO**
- **JWT authentication with cookies**
- Secure user authentication & authorization
- **MongoDB** database integration
- **Cloudinary** media uploads
- RESTful API structure
- Scalable and production-ready architecture

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Socket.IO**
- **MongoDB + Mongoose**
- **JWT (Cookie-based Authentication)**
- **Cloudinary**
- **dotenv**

---

## 📁 Project Setup

Follow the steps below to run the backend locally.

---

### 1. Clone the Repository

Clone the repo and go to the backend directory.

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup

Create a .env file in the root directory of the project:

```bash
touch .env
```

Add the following variable inside the .env file:
```bash
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 4. Run Database

Make sure MongoDB is running locally or you are using a cloud MongoDB service such as MongoDB Atlas.

### 5. Start the Development Server
```bash
npm run dev
```