require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.route');
const uploadRouter = require('./routes/upload.route');

const connectToDB = require('./config/db');

const app = express();

// DB Connection
connectToDB();

// View engine
app.set('view engine', 'ejs');

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Routes
app.use('/', userRouter);
app.use('/', indexRouter);
app.use('/', uploadRouter);

// PORT (RENDER SAFE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
