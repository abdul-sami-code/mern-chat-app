# React Socket Chat App (Frontend)

This is the **frontend client** for a real-time chat application built using **React.js** and **Socket.IO**.  
It connects to a **Node.js backend API** via WebSockets to provide instant, real-time messaging.

The app supports environment-based configuration using a `.env` file.

---

## 🚀 Features

- Real-time messaging using **Socket.IO**
- Modern **React.js** frontend
- Connects to **Node.js API**
- Environment-based configuration
- Fast and lightweight UI
- Scalable and production-ready structure

---

## 🛠️ Tech Stack

- **React.js**
- **Socket.IO Client**
- **Node.js API** (Backend)
- **Environment Variables (MODE)**

---

## 📁 Project Setup

Follow the steps below to run this project locally.

### 1. Clone the Repository

Clone the repo and go to the frontend directory.

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
MODE=development
```

> You can change the value to production when deploying the application.


### 4. Start the Development Server

```bash
npm run dev
```

Thats it. Enjoy chatting!!!