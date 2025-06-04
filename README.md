# Express.js – Product API

A RESTful API built with Express.js implementing standard CRUD operations, middleware, error handling, and advanced features like filtering and pagination.

---

## 🚀 Features

- Full CRUD API for `products`
- Custom middleware for:
  - Logging
  - JSON parsing
  - API key authentication
  - Input validation
- Centralized error handling with custom error classes
- Advanced routes for:
  - Category filtering
  - Pagination
  - Search
  - Product statistics

---

## 📦 Project Structure
```bash
week-2-express-js-assignment/
├── server.js
├── routes/
│ └── products.js
├── middleware/
│ ├── auth.js
│ ├── logger.js
│ ├── validateProduct.js
│ └── errorHandler.js
├── utils/
│ └── errors.js
├── public/
│ └── index.html (optional frontend)
├── .env
├── .env.example
└── README.md
```
---
## 🛠️ Getting Started
### 1. Clone and Install Dependencies

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-bethwel3001
cd week-2-express-js-assignment
npm install
```
### 2. Set Environment Variables
Create a .env file in the root:
```bash
API_KEY=your_api_key_here
PORT=3000
```
You can refer to .env.example.


### 3. Run the Server
```bash
node server.js
```
The server will start at 
```bash
http://localhost:3000
```
### 4. Test the API
# API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get products by id |
| POST | /products | Create a new product |
| GET | /products/:id | Get a product by id |
| PUT | /products/:id | Update a product by id |
| DELETE | /products/:id | Delete a product by id |

# 🧪 Testing
You can use:

Postman / Insomnia

public/index.html (included frontend tester UI)

# 👨‍💻 Author
Bethwel (GitHub Classroom Assignment)