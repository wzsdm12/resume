const fetch = require('node-fetch');
global.fetch = fetch;
global.Request = fetch.Request;
global.Response = fetch.Response;
global.Headers = fetch.Headers;
global.AbortController = require('abort-controller');

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
const resumeRoutes = require('./routes/resumes');
const templateRoutes = require('./routes/templates');

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Middleware
app.use(bodyParser.json());

// Clerk authentication middleware
app.use(ClerkExpressWithAuth());

// Routes
app.use('/api/resumes', resumeRoutes);
app.use('/api/templates', templateRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log('MongoDB connection error:', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});