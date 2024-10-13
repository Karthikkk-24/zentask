'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt with:', { username, password, rememberMe });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg flex max-w-4xl w-full">
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl mb-6 text-blue-500 font-extrabold">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Username
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
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
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
                            Sign In
                        </button>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center invisible">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                    checked={rememberMe}
                                    onChange={(e) =>
                                        setRememberMe(e.target.checked)
                                    }
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-500 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center items-center rounded-r-lg">
                    <h2 className="text-3xl font-bold mb-4">
                        Welcome to login
                    </h2>
                    <p className="mb-4">Don't have an account?</p>
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
