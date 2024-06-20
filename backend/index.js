const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => console.log(err));

app.use(express.json());
const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
