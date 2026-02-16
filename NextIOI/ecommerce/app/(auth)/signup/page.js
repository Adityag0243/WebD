'use client'

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Registration = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        age: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            console.log("🔵 Frontend: Starting signup...");
            console.log("🔵 Frontend: Form data:", formData);

            const response = await axios.post("http://localhost:3000/api/signup", formData);
            console.log("🔵 Frontend: Response received:", response.data);

            // Axios automatically parses JSON responses
            const data = response.data;

            if (!data.success) {
                // Handle validation errors
                if (data.errors && Array.isArray(data.errors)) {
                    throw new Error(data.errors.map(e => e.message).join(", "));
                }
                throw new Error(data.message || "Registration failed");
            }

            setMessage("🎉 Registration successful!");
            setFormData({
                full_name: "",
                age: "",
                gender: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setTimeout(() => {
                router.push("/login");
            }, 2000);

        } catch (error) {
            console.error("Error:", error);

            // Handle axios errors properly
            if (error.response) {
                // Server responded with error status
                const errorData = error.response.data;
                if (errorData.errors && Array.isArray(errorData.errors)) {
                    setMessage(errorData.errors.map(e => e.message).join(", "));
                } else {
                    setMessage(errorData.message || "Registration failed");
                }
            } else if (error.request) {
                // Request made but no response received
                setMessage("No response from server. Please check your connection.");
            } else {
                // Error in request setup or other errors
                setMessage(error.message || "Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-white px-4 mt-5">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-5xl border border-gray-200">
                {/* Left Section - Offer + Shoes */}
                <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-8 relative">
                    <h1 className="text-6xl font-extrabold text-gray-900">
                        40% OFF
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 font-medium">
                        On Your First Purchase
                    </p>
                    <img
                        src="https://www.pngall.com/wp-content/uploads/18/Nike-Cow-Shoes-Striking-Footwear-Concept-PNG.png"
                        alt="Sneakers"
                        className="mt-6 w-73 transform hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Right Section - Registration Form */}
                <div className="flex-1 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                        Sign Up
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        To avail exclusive offers!
                    </p>

                    {message && (
                        <div className={`mb-4 text-center text-sm font-medium ${message.includes('successful') ? 'text-green-500' : 'text-red-500'
                            }`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Full Name"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                        />

                        <input
                            type="number"
                            min={10}
                            max={120}
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                        />

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Prefer not to say</option>
                        </select>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-lg font-bold text-md hover:bg-gray-800 transition-all disabled:opacity-50"
                        >
                            {loading ? "Registering..." : "SIGN UP NOW"}
                        </button>

                        <Link href="/login">
                            <button
                                type="button"
                                className="w-full bg-black mt-2 text-white py-3 rounded-lg font-bold text-md hover:bg-gray-800 transition-all"
                            >
                                Already a user? Log In here
                            </button>
                        </Link>

                        <Link href="/loginGoogle">
                            <button
                                type="button"
                                className="w-full bg-black mt-2 text-white py-3 rounded-lg font-bold text-md hover:bg-gray-800 transition-all"
                            >
                                Login With Google
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;