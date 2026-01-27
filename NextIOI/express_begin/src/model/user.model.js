const { getJSON, timers } = require("jquery");
const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema(
    {
        full_name: String,
        email: {
            type: String,
            required: true,
            unique: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        },
        age: {
            type: Number,
            min: 18,
            max: 65,
        },
        gender: { type: String, enum: ["male", "female"] },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        city_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "City",
            required: true,
        }
    },
    { timestamps: true },
);

let User = mongoose.model("User", userSchema);
module.exports = User;

// Server - DB - Tables
// Cluster - DB - collections
