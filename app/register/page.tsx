'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration attempt with:', {
            username,
            email,
            password,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg flex max-w-4xl w-full">
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl text-blue-500 font-extrabold mb-6">
                        Create Account
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                USERNAME
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                EMAIL
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                PASSWORD
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center items-center rounded-r-lg">
                    <h2 className="text-3xl font-bold mb-4">
                        Welcome to register
                    </h2>
                    <p className="mb-4">Already have an account?</p>
                    <Link
                        href="/login"
                        className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}
