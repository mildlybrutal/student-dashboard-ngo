const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	achievements: [String],
	aboutUs: String,
});

module.exports = mongoose.model("Student", StudentSchema);
