const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res) => {
	try {
		const students = await Student.find();
		res.json(students);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Get a specific student (Restricted)
router.get("/:id", async (req, res) => {
	try {
		const student = await Student.findById(req.params.id);
		res.json(student);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Create a student (Restricted)
router.post("/", async (req, res) => {
	const student = new Student({
		name: req.body.name,
		age: req.body.age,
		gender: req.body.gender,
		address: req.body.address,
		about: req.body.about,
		achievements: req.body.achievements,
	});

	try {
		const newStudent = await student.save();
		res.status(201).json(newStudent);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const student = await Student.findById(req.params.id);
		if (req.body.name) student.name = req.body.name;
		if (req.body.age) student.age = req.body.age;
		if (req.body.gender) student.gender = req.body.gender;
		if (req.body.address) student.address = req.body.address;
		if (req.body.about) student.about = req.body.about;
		if (req.body.achievements) student.achievements = req.body.achievements;
		const updatedStudent = await student.save();
		res.json(updatedStudent);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
