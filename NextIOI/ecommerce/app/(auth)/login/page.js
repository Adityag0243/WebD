'use client'

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
        setMessage('');
        setLoading(true);

        try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        let data;
        const contentType = response.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            console.error("Non-JSON response:", text);
            throw new Error("Server returned an invalid response");
        }

        if (!response.ok) {
            throw new Error(data.Message || data.message || 'Login failed');
        }

        setMessage('✅ Login successful!');
        
        // Store token if provided
        if (data.token) {
            localStorage.setItem('token', data.token);
        }

        // Redirect to home page
        setTimeout(() => {
            router.push('/');
        }, 1000);

        } catch (error) {
        console.error("Login error:", error);
        setMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-white px-4 my-5">
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

            {/* Right Section - Login Form */}
            <div className="flex-1 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
                Log In
            </h2>
            <p className="text-center text-gray-500 mb-6">
                To avail exclusive offers!
            </p>

            {message && (
                <div className={`mb-4 text-center text-sm font-medium ${
                message.includes('successful') ? 'text-green-500' : 'text-red-500'
                }`}>
                {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-black">
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

                <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg font-bold text-md hover:bg-gray-800 transition-all disabled:opacity-50"
                >
                {loading ? "Logging in..." : "Login Now"}
                </button>

                <Link href="/signup">
                <button
                    type="button"
                    className="w-full bg-black text-white py-3 rounded-md font-bold text-md hover:bg-gray-800 transition-all"
                >
                    New User? Sign Up here
                </button>
                </Link>
            </form>

            <Link href="/api/auth/google">
                <button
                type="button"
                className="w-full bg-black mt-3 text-white py-3 rounded-lg font-bold text-md hover:bg-gray-800 transition-all"
                >
                Login With Google
                </button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;