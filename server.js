// ✅ 1. Import required modules
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const morgan = require('morgan');
const productsRouter = require('./routes/products');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const loggerMiddleware = require('./middleware/logger');

// ✅ 2. Load environment variables
dotenv.config();

// ✅ 3. Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ 4. Middleware setup
// Add this near your other app.use() middlewares
app.use(express.static('public'));
app.use(express.json()); // Parse JSON request bodies
app.use(loggerMiddleware); // Custom logger
app.use(morgan('dev')); // Use morgan for better logging (optional)
app.use(authMiddleware); // Check API key in headers

// ✅ 5. Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Use the products router for all product-related routes
app.use('/api/products', productsRouter);

// ✅ 6. Error handling middleware
app.use(errorHandler);

// ✅ 7. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// ✅ 8. Export app for testing
module.exports = app;
