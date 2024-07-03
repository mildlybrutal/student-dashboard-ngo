const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(401).json({ message: "Invalid credentials" });
		}
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

module.exports = router;
