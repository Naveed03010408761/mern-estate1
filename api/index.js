const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO,)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});
