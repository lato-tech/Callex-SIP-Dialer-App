const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const contactsRoutes = require('./routes/contacts');
const callsRoutes = require('./routes/calls');
const recordingsRoutes = require('./routes/recordings');
const ldapRoutes = require('./routes/ldap');
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error('MongoDB connection error:', err));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/calls', callsRoutes);
app.use('/api/recordings', recordingsRoutes);
app.use('/api/ldap', ldapRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});