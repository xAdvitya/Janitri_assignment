# Jantri Assignment API

This is the **Jantri Assignment API**, built using **Node.js** and **MongoDB Atlas**. 
It provides authentication, patient management, and user management functionalities.

## 🚀 Features

- **Authentication** (Register, Login, Logout)
- **Patient Management** (Add, Get, Update Heart Rate)
- **User Management** (Retrieve Users)

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas

---

## 📌 API Endpoints

### 🔐 Authentication
| Method | Endpoint          | Description           |
|--------|------------------|----------------------|
| POST   | `/auth/register` | Register a new user |
| POST   | `/auth/login`    | Login user          |
| POST   | `/auth/logout`   | Logout user         |

#### Example Request: Register
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "mobileNumber": "9876543210",
  "bio": "I am a software developer.",
  "availability": {
    "start": "09:00",
    "end": "17:00"
  }
}
```

---

### 🏥 Patient Management
| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/patient/:id`         | Get a patient's details      |
| POST   | `/patient/`            | Add a new patient           |
| PUT    | `/patient/heart-rate`  | Update a patient's heart rate |
| GET    | `/patient/`            | Get all patients            |

#### Example Request: Add Patient
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "gender": "Male",
  "address": "123 Main St, City, Country",
  "phoneNumber": "+1234567890",
  "allergies": ["Peanuts", "Dust"],
  "heartRate": [
    {
      "value": 72,
      "timestamp": "2023-10-01T12:00:00Z"
    },
    {
      "value": 75,
      "timestamp": "2023-10-01T13:00:00Z"
    }
  ]
}
```

---

### 👤 User Management
| Method | Endpoint         | Description      |
|--------|-----------------|------------------|
| GET    | `/user/`        | Get all users    |

---

## 🏗 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/jantri-assignment.git
   cd jantri-assignment
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables (`.env`)**
   ```plaintext
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Run the server**  
   ```bash
   npm start
   ```

---

## 📬 Postman Collection

You can use the [Postman Collection](https://interstellar-comet-703296.postman.co/workspace/explore~d5e31186-4bef-420e-9cbe-e5d36c5c4e06/collection/14426150-1aeeb55f-e76d-4312-89da-60c717ec2385?action=share&creator=14426150) to test the API.

---
