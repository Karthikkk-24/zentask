'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Password reset attempt for:', { email });
        // Implement password reset logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg flex max-w-4xl w-full">
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl mb-6 text-blue-500 font-extrabold">
                        Forgot Password
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Reset Password
                        </button>
                        <div className="mt-4 text-center">
                            <Link
                                href="/login"
                                className="text-sm text-blue-500 hover:underline"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center items-center rounded-r-lg">
                    <h2 className="text-3xl font-bold mb-4">
                        Password Recovery
                    </h2>
                    <p className="mb-4 text-center">
                        Enter your email and we'll send you instructions to
                        reset your password.
                    </p>
                    <Link
                        href="/register"
                        className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
