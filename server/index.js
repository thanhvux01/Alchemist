const dotenv = require("dotenv");
const express = require("express");
const route = require("./routes");
const cookieParser = require('cookie-parser');
const connectDB = require("./db/config");

const cors = require('cors');
const PORT = 5000;

dotenv.config();

const app = express();

connectDB();
app.use(cookieParser())
app.use(cors({  
  origin: ["http://localhost:3000"],
  credentials: true }));
  app.use(express.json({ limit: '100000kb' }));
  app.use(express.urlencoded({ limit: '100000kb' }));
  
route(app);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
