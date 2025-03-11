import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import methodOverride from "method-override";

import config from "./server/config.js";
import userRoutes from "./server/routes/user.routes.js";  
import contactRoutes from "./server/routes/Contact.routes.js";  
import Template from "./server/template.js";  
import errorHandler from "./server/controllers/error.controller.js"; 

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(methodOverride());

// Root Route
app.get("/", (req, res) => {
    res.status(200).send(Template());
});

// Serve static files
app.use("/", express.static(path.join(process.cwd(), "public")));

// API Routes
app.use("/api", userRoutes);
app.use("/api", contactRoutes);

// 404 Handler for API routes
app.use((req, res) => {
    res.status(404).json({ error: "API endpoint not found." });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// MongoDB Connection with Error Handling
mongoose.set("strictQuery", false);

mongoose.connect(config.mongoUri)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => {
        console.error("Database connection error:", err);
        process.exit(1); 
    });

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection lost:", err);
});

// Start Server
const PORT = config.port || 5050;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
