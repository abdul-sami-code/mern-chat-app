# Real-Time Chat Application (Full Stack)

This repository contains the **complete full-stack real-time chat application**, including:

- 🖥️ **Frontend** built with **React.js**
- ⚙️ **Backend** built with **Node.js, Express, Socket.IO**
- 🔐 **JWT authentication using cookies**
- ☁️ **Cloudinary integration for media sharing**
- 🗄️ **MongoDB** for data storage

The frontend and backend are organized as **separate folders** inside this root directory.

---

## 📂 Project Structure

```bash
root/
├── frontend/   # React client
├── backend/    # Node.js API & Socket server
└── README.md   # Project overview (this file)
```

## Features

Real-time chat using WebSockets (Socket.IO)

Secure JWT-based authentication with cookies

Image & media sharing via Cloudinary

MongoDB database

Environment-based configuration

Scalable and production-ready setup

## Tech Stack

### Frontend

- React.js
- Socket.IO Client
- zustand (state management)

### Backend

- Node.js
- Express.js
- Socket.IO
- MongoDB + Mongoose
- JWT (Cookie-based auth)
- Cloudinary (file uploading to cloud)

## Environment Variables

Both frontend and backend use environment variables.

Frontend .env → handled inside frontend/

Backend .env → handled inside backend/

Please refer to the individual README files inside each folder for exact configuration.