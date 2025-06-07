//  1. Import required modules
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const morgan = require('morgan');
const productsRouter = require('./routes/products');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const loggerMiddleware = require('./middleware/logger');

//  2. Load environment variables
dotenv.config();

// 3. Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

//  4. Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(loggerMiddleware); 
app.use(morgan('dev')); 
app.use(authMiddleware);

//  5. Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

app.use('/api/products', productsRouter);

//  6. Error handling middleware
app.use(errorHandler);

//  7. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

//  8. Export app for testing
module.exports = app;
