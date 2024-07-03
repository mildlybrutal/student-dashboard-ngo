// /home/akash/Student Project/backend/models/Student.js

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	achievements: [String],
	aboutUs: String,
	image: { type: String },
});

module.exports = mongoose.model("Student", studentSchema);
