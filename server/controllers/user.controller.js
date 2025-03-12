import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import errorHandler from "../controllers/error.controller.js";
import config from "../config.js";

// Create a new user (Signup)
const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Save the new user with a plaintext password
        const user = new User({ name, email, password: password.trim() });

        await user.save();
        return res.status(201).json({ message: "Successfully signed up!" });

    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
};

// Login (Sign-in) Function
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email }).select("+password");

        if (!user) return res.status(401).json({ error: "User not found" });

        console.log("Stored Password:", user.password);
        console.log("Entered Password:", password.trim());

        if (password.trim() !== user.password) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: "7d" });

        res.cookie("t", token, { httpOnly: true });

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        return res.status(400).json({ error: "Could not sign in" });
    }
};

// Middleware: Require Authentication (JWT Protected)
const requireSignin = (req, res, next) => {
    const token = req.cookies.t || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Access Denied: No Token Provided" });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.auth = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid Token" });
    }
};

// List all users
const list = async (req, res) => {
    try {
        let users = await User.find().select("-__v");
        res.json(users);
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
};

// Read a single user by ID
const read = (req, res) => {
    const user = req.profile;
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        created: user.created,
        updated: user.updated
    });
};

// Update user details
const update = async (req, res) => {
    try {
        let user = req.profile;
        const { name, email, password } = req.body;

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password.trim();

        user.updated = new Date();
        await user.save();

        res.json(user);
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
};

// Delete a user
const remove = async (req, res) => {
    try {
        let user = req.profile;
        await user.deleteOne();
        res.json({ message: "User deleted successfully!" });
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
};

// Bulk delete all users
const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany();
        res.json({ message: "All users deleted successfully!" });
    } catch (err) {
        return res.status(500).json({ error: "Error deleting all users" });
    }
};

// Middleware: Find user by ID
const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id).select("-__v");
        if (!user) return res.status(400).json({ error: "User not found" });

        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({ error: "Could not retrieve user" });
    }
};

// Named exports + Default Export to prevent import issues
export { create, signin, requireSignin, list, read, update, remove, deleteAllUsers, userByID };
export default { create, signin, requireSignin, list, read, update, remove, deleteAllUsers, userByID };
