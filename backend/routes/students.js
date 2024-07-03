const express = require("express");
const multer = require("multer");
const path = require("path");
const Student = require("../models/Student");
const auth = require("../middleware/auth");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		const filetypes = /jpeg|jpg|png|gif/;
		const mimetype = filetypes.test(file.mimetype);
		const extname = filetypes.test(
			path.extname(file.originalname).toLowerCase()
		);
		if (mimetype && extname) {
			return cb(null, true);
		}
		cb(
			new Error(
				"Error: File upload only supports the following filetypes - " +
					filetypes
			)
		);
	},
});

// Public route to get all students
router.get("/", async (req, res) => {
	try {
		const students = await Student.find().select("-__v");
		res.json(students);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
});

// Public route to get a single student by ID
router.get("/:id", async (req, res) => {
	try {
		const student = await Student.findById(req.params.id).select("-__v");
		if (!student) {
			return res.status(404).json({ message: "Student not found" });
		}
		res.json(student);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
});

// Admin route to create a new student
router.post("/", auth, upload.single("image"), async (req, res) => {
	try {
		const { name, age, achievements, aboutUs } = req.body;
		const studentData = {
			name,
			age,
			achievements: achievements.split(",").map((item) => item.trim()),
			aboutUs,
			image: req.file ? `/uploads/${req.file.filename}` : undefined,
		};
		const student = new Student(studentData);
		await student.save();
		res.status(201).json(student);
	} catch (error) {
		res.status(400).json({ message: "Invalid data", error: error.message });
	}
});

// Admin route to update a student
router.put("/:id", auth, upload.single("image"), async (req, res) => {
	try {
		const { name, age, achievements, aboutUs } = req.body;
		const updateData = {
			name,
			age,
			achievements: achievements.split(",").map((item) => item.trim()),
			aboutUs,
		};
		if (req.file) {
			updateData.image = `/uploads/${req.file.filename}`;
		}
		const student = await Student.findByIdAndUpdate(req.params.id, updateData, {
			new: true,
			runValidators: true,
		});
		if (!student) {
			return res.status(404).json({ message: "Student not found" });
		}
		res.json(student);
	} catch (error) {
		res.status(400).json({ message: "Invalid data", error: error.message });
	}
});

// Admin route to delete a student
router.delete("/:id", auth, async (req, res) => {
	try {
		const student = await Student.findByIdAndDelete(req.params.id);
		if (!student) {
			return res.status(404).json({ message: "Student not found" });
		}
		res.json({ message: "Student deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
});

module.exports = router;
