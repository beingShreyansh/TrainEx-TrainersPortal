const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./dbConfig");
const { adminRouter, homeRouter } = require("./routes");

const app = express();

const PORT = process.env.PORT;
connectDB();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use('/admin', adminRouter);
app.use('/home', homeRouter);

app.listen(PORT, () => {
  console.log(`Server is connected at ${PORT}`);
});
