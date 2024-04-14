// Require Package
const mongoose = require("mongoose");

// Define Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
}, { timestamps: true });

// Create Model
const userModel = mongoose.model("User", userSchema);

// Export Model
module.exports = userModel;
