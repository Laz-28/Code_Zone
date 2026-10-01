require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
  console.log('Hit the root route');
  res.send('Peer-to-Peer Mentorship API is running...');
});

// Test DB connection endpoint
app.get('/api/test-db', async (req, res) => {
  console.log('➡️ /api/test-db route hit in the browser. Attempting to query MySQL...');
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    console.log('✅ Database query successful!');
    res.json({ message: 'Database connected successfully!', data: rows });
  } catch (error) {
    console.error('❌ Database query failed:', error.message);
    res.status(500).json({ error: 'Database connection failed', details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
