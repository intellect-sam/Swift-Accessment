require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./src/config/corsOptions');
// const { logger } = require('./middleware/logEvents');
// const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./src/middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./src/middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./src/config/dbConn');

const PORT = process.env.PORT || 3000;

// connect MongoDB
connectDB();

//Handle options credentials check before CORS
// and fetch cookies credentials requirements
app.use(credentials);
app.use(cors(corsOptions));

// built in middleware for form data
app.use(express.urlencoded({ extended: false }));

// built in middleware for json
app.use(express.json());

// middleware for cookie
app.use(cookieParser());

// middleware to serve static file
app.use(express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./src/routes/root'));
app.use('/register', require('./src/routes/register'));
app.use('/auth', require('./src/routes/auth'));
app.use('/refresh', require('./src/routes/refresh'));
app.use('/logout', require('./src/routes/logout'));

app.use(verifyJWT);
app.use('/employees', require('./src/routes/api/employees'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

// app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
});
