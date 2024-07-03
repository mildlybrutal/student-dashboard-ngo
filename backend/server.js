const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Could not connect to MongoDB:", err));

const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/students");

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
