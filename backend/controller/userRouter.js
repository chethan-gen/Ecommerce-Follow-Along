const express = require("express");
const userRouter = express.Router();
const uploadUserImage = require("../middleware/multer");
const userModel = require("../models/usermodel"); // Fixed typo: userModle -> userModel

// Signup Route
userRouter.post("/signup", uploadUserImage.single("image"), async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Corrected condition: Check if fields are empty (previously incorrect logic with `!=`)
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        // Check if user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create a new user
        const newUser = new userModel({ name, email, password });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Login Route
userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Corrected condition: Check if fields are empty
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        // Authenticate the user (dummy authentication logic; expand as needed)
        const user = await userModel.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        return res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

module.exports = userRouter;
