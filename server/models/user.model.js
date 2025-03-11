import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: "Email is required"
    },
    password: {
        type: String,  // ✅ Removed "select: false" to allow retrieving passwords
        required: "Password is required"
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    updated: {
        type: Date
    }
}, { versionKey: false });

export default mongoose.model("User", UserSchema);
