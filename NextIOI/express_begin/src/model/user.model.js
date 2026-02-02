const { getJSON, timers } = require("jquery");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

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
        gender: { type: String, enum: ["male", "female", "other"] },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        city_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "City",
            default: null,
        },
        provider: { type: String, enum: ["app", "google"], default: "app" },
        googleId: { type: String },
        avatar: { type: String },
        password: { type: String, minlength: 8, select: false },
    },
    { timestamps: true },
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {  
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});


let User = mongoose.model("User", userSchema)
module.exports = User;

// Server - DB - Tables
// Cluster - DB - collections
