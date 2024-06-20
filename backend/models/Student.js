const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    about: { type: [String], required: true },
	achievements: { type: [String], required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
